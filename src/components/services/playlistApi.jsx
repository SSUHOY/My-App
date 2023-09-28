import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { uploadTokens } from "../../store/actions/creators/tracks";

const baseQueryWithReauth = async (args, api, extraOptions) => {
    const baseQuery = fetchBaseQuery({
      baseUrl: "https://skypro-music-api.skyeng.tech",
      prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.accessToken;
        console.debug("Использую токен из стора", { token });
        if (token) {
          headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
      },
    });
    // Запрос
    const result = await baseQuery(args, api, extraOptions);
    console.debug("результат первого запроса", { result });

    // Если выполняется без 401 кода, то все окей , просто отдаем результат запроса
    if (result?.error?.status !== 401) {
      return result;
    }

    // функция очистки данных о юзере для принудительной авторизации и возвращение на страницу логина
    const forceLogout = () => {
      console.debug("Принудительная авторизация!");
      api.dispatch(uploadTokens(null, null));
      window.location.href ="/login";
    };

    // Функция getState возвращает состояние redux стейта целиком, ее нам предоставляет rtk query, она прилетает параметром запроса в функцию
    const { auth } = api.getState();

    console.debug("Данные пользователя в сторе", { auth });

    // Если в сторе нет refresh токена, то помочь пользователю мы уже ничем не сможем, разлогиниваем его и отправляем авторизоваться руками
    if (!auth.refreshToken) {
        console.log('no token');
      return forceLogout();
    }
    const refreshResult = await baseQuery(
        {
            url: '/user/token/refresh/',
            method: 'POST',
            body: {
              refresh: auth.refreshToken,
            },  
        },
        api,
        extraOptions
    )
     console.debug('Результат запроса на обновление токена', {refreshResult});

     if(!refreshResult.data.access) {
        return forceLogout()
     }
     api.dispatch(
        uploadTokens({...auth, accessToken:refreshResult.data.access})
     )
     const retryResult = await baseQuery(args, api, extraOptions)

     if(retryResult?.error?.status === 401) {
        return console.log('no token2');
     }
     console.log('Повторный запрос завершился успешно')

     return retryResult
  };
  export const playlistApi = createApi({
    reducerPath: 'playlistApi',
    tagTypes: ['Favorites'],
    baseQuery: baseQueryWithReauth,
  
    endpoints: (builder) => ({
      getFavoriteTracks: builder.query({
        query: () => '/catalog/track/favorite/all/',
        providesTags: (result) =>
          result
            ? [
                ...result.map(({ id }) => ({ type: 'Favorites', id })),
                { type: 'Favorites', id: 'LIST' },
              ]
            : [{ type: 'Favorites', id: 'LIST' }],
      }),
      getTracks: builder.query({
        query: () => '/catalog/track/all',
        providesTags: (result) =>
          result
            ? [
                ...result.map(({ id }) => ({ type: 'Favorites', id })),
                { type: 'Favorites', id: 'LIST' },
              ]
            : [{ type: 'Favorites', id: 'LIST' }],
      }),
  
      addToFavorites: builder.mutation({
        query: (id) => ({
          url: `/catalog/track/${id}/favorite/`,
          method: 'POST',
        }),
        invalidatesTags: [{ type: 'Favorites', id: 'LIST' }],
      }),
      deleteFromFavorites: builder.mutation({
        query: (id) => ({
          url: `/catalog/track/${id}/favorite/`,
          method: 'DELETE',
        }),
        invalidatesTags: [{ type: 'Favorites', id: 'LIST' }],
      }),
    }),
  })
  

  export const {
    useGetFavoriteTracksQuery,
    useGetTracksQuery,
    useGetPlaylistQuery,
    useAddToFavoritesMutation,
    useDeleteFromFavoritesMutation,
  } = playlistApi
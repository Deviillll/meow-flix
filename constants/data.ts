 interface ROUTES {
    name: string;
    path: string;
}
export type { ROUTES };
 export const routes: ROUTES[] = [
    {
        name: "Movies",
        path: "/movies",
    },
    {
        name: "Tv Shows",
        path: "/TvShows",
    },
];
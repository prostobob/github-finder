export interface IUser {
    name: string;
    avatar: string;
    link: string;
}

export interface UserResponse {
    incomplete_results: boolean;
    items: any[];
    total_count: number;
}

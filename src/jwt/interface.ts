
export interface PayLoad {
user_id: number,
email: string
}
export interface DecodePayload {
    data: {
        user_id: number,
        email: string
    }
    
}
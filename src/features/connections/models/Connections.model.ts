// boiler plate
export type BaseConnectionModel = {
    readonly id: number;
    readonly email: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly profilePic?: string;
    readonly dateOfBirth?: Date;
    readonly language: string;
    readonly createdAt: string;
    readonly updatedAt: string;
}
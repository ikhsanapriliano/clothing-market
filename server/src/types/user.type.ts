enum Gender {
    Male = "Male",
    Female = "Female",
}

export interface profilePayload {
    username?: string;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    photo?: string;
    address?: string;
    birthDate?: string;
    gender?: Gender;
}

export interface changePasswordPayload {
    currentPassword: string;
    newPassword: string;
}

enum Gender {
    Male = "Male",
    Female = "Female",
}

export interface ProfilePayload {
    username?: string;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    photo?: string;
    address?: string;
    birthDate?: string;
    gender?: Gender;
}

export interface ChangePasswordPayload {
    currentPassword: string;
    newPassword: string;
}

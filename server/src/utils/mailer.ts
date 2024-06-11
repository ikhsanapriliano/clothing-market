import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.HOST_MAIL,
    port: Number(process.env.PORT_MAIL),
    secure: true,
    auth: {
        user: process.env.SENDER_MAIL,
        pass: process.env.PASSWORD_MAIL,
    },
});

export const sendVerificationMail = async (
    receiver: string,
    id: string
): Promise<void> => {
    await transporter.sendMail({
        from: process.env.SENDER_MAIL,
        to: receiver,
        subject: "Clothing Market Account Verification",
        html: `<div>
            <h1>Welcome to Clothing Market</h1>
            <p>Please verify your account on the button below to continue :)</p>
            <button>
                <a href="http://${process.env.HOST}:${process.env.PORT}/api/auth/verify/${id}">Verify Now</a>
            </button>
        </div>`,
    });
};

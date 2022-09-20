const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const {GOOGLE_ID,GOOGLE_REFRESH,GOOGLE_SECRET,GOOGLE_URL,GOOGLE_USER} = process.env

const sendMail = async(mail,code) => {
    const OAuth2 = google.auth.OAuth2
    const client = new OAuth2(
        GOOGLE_ID,
        GOOGLE_SECRET,
        GOOGLE_URL,
    )
    client.setCredentials({
        refresh_token: GOOGLE_REFRESH
    })

    const accessToken = client.getAccessToken()

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: GOOGLE_USER,
            type: 'OAuth2',
            clientId: GOOGLE_ID,
            clientSecret: GOOGLE_SECRET,
            refreshToken: GOOGLE_REFRESH,
            accessToken: accessToken
        },
        tls: { rejectUnauthorized: false}
    })
    const mailOptions = {
        from: GOOGLE_USER,
        to: mail,
        subject: 'verify amazing events account',
        html: 
        `<div>
        <head>
        <style>
            table, td, div, h1, p {font-family: Arial, sans-serif;}
        </style>
    </head>
    <body style="margin:0;padding:0;">
        <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
            <tr>
                <td align="center" style="padding:0;">
                    <table role="presentation" style="width:602px;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;">
                        <tr>
                            <td align="center" style="padding:40px 0 30px 0;background:#c9c2f3;">
                                <img src="https://media.discordapp.net/attachments/993579792077176842/1010294134168358942/ico.png?width=843&height=676" alt="" width="210" style="height:auto;display:block;" />
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:36px 30px 42px 30px;">
                                <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                                    <tr>
                                        <td style="padding:0 0 36px 0;color:#153643;">
                                            <h1 style="font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;">Welcome ${mail}! You must verify your account before starting.</h1>
                                            <p style="margin:0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"><a href="http://localhost:4000/auth/verification/${code}" style="color:#ee4c50;text-decoration:underline;">Click here to verify your email!!</a></p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:30px;background:#8672b3;">
                                <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;">
                                    <tr>
                                        <td style="padding:0;width:50%;" align="left">
                                            <p style="margin:0;font-size:14px;line-height:16px;font-family:Arial,sans-serif;color:#ffffff;">
                                                &reg; MyTinerary 2022<br/><a href="#" style="color:#ffffff;text-decoration:underline;">Unsubscribe</a>
                                            </p>
                                        </td>
                                        <td style="padding:0;width:50%;" align="right">
                                            <table role="presentation" style="border-collapse:collapse;border:0;border-spacing:0;">
                                                <tr>
                                                    <td style="padding:0 0 0 10px;width:38px;">
                                                        <a href="http://www.twitter.com/" style="color:#ffffff;"><img src="https://assets.codepen.io/210284/tw_1.png" alt="Twitter" width="38" style="height:auto;display:block;border:0;" /></a>
                                                    </td>
                                                    <td style="padding:0 0 0 10px;width:38px;">
                                                        <a href="http://www.facebook.com/" style="color:#ffffff;"><img src="https://assets.codepen.io/210284/fb_1.png" alt="Facebook" width="38" style="height:auto;display:block;border:0;" /></a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
            
        </div>`
    }
    await transport.sendMail(mailOptions, (error,response)=>{
        if(error) {
            console.log(error)
        } else {
            console.log('ok')
        }
    })
}
module.exports = sendMail
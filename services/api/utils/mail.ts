const nodemailer = require('nodemailer');

export const sendmail=async(from :string,to:string , subject:string , )=>{
   
   let     text= 'This is a test email from Node.js using Nodemailer.'
    // Create a transporter using your Gmail account
    console.log('mail send')
const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
     port: 2525,
    auth: {
        user: "aae229ad4da7c3",
        pass: "99b506d031a205"
    }
  });
  
  // Set up email data
  
  
  // Send the email
 await  transporter.sendMail(
    {
        from: 'shashikumarverma1996@gmail.com',
        to: 'skantverma1996@gmail.com.com',
        subject: 'Test Email',
        text: 'This is a test email from Node.js using Nodemailer.',
       html:`<p>Dear Sir/Ma'am</br> `,
        useHtml:true,
        attachment: String
      }
  );
}

export const students=async(item:any)=>{
    console.log(item)
    await sendmail(
        'from' , 'to' ,'subject'
    )
}
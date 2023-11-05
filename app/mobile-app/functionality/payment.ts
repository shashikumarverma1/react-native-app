import RazorpayCheckout from 'react-native-razorpay';
export const payment=(useramount , username , useremail , usercontact)=>{
    {
        var options = {
          description: 'Credits towards consultation',
          image: 'https://i.imgur.com/3g7nmJC.png',
          currency: 'INR',
          key: 'rzp_test_XZqevi0iNDKcH1',
          // 'B8q2yygi69aEuB7kOxvO42sP', // Your api key
          // rzp_test_XZqevi0iNDKcH1
          amount: useramount,
          name: username,
          prefill: {
            email: useremail,
            contact: usercontact,
            name: 'Razorpay Software'
          },
          theme: {color: '#F37254'}
        }
        RazorpayCheckout
        .open(options).then((data) => {
          // handle success
          alert(`Success: ${data.razorpay_payment_id}`);
        }).catch((error) => {
          // handle failure
          alert(`Error: ${error} | ${error.description}`);
        });
      }
}
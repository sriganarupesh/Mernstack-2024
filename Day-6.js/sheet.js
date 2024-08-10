<html>
<head>
    <title>L&R Form</title>
</head>
<style>
    body 
    {
        background-color: rgb(255, 250, 240);
        font-family: Arial, sans-serif;
    }
    .container 
    {
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
    }
    .login, .reg 
    {
        background-color: rgb(220, 220, 220);
        border: 2px ridge rgb(100, 100, 100);
        border-radius: 10px;
        padding: 20px;
        margin: 20px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }
    form 
    {
        width: 400px;
        height: auto;    
        padding: 30px;
        background-color: rgb(245, 245, 245);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    }
    form h1 
    {
        text-align: center;
        border-bottom: 3px solid rgb(150, 150, 150);
        padding-bottom: 10px;
        font-size: 24px;
    }
    form label 
    {
        display: block;
        margin-top: 15px;
        font-size: 16px;
    }
    form input, form select 
    {
        width: 100%;
        height: 30px;
        margin-top: 5px;           
        margin-bottom: 20px;
        border: 1px solid rgb(150, 150, 150);
        border-radius: 8px;
        padding: 5px;
    }
    input[type="button"] 
    {
        width: 100%;
        height: 35px;
        background-color: rgb(70, 130, 180);
        border: none;
        color: white;
        font-size: 10px;
        border-radius: 8px;
        cursor: pointer;
    }
    input[type="button"]
    {
        background-color: rgb(60, 120, 170);
    }
    input[type="radio"] 
    {
        width: auto;
    }
    .radio-button 
    {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 10px;
    }
    input[type="checkbox"] 
    {
        width: auto;
    }
    .check-box 
    {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 10px;
    }
</style>
<body>
    <div class="container">
        <div class="login">
            <form class="login-form">
                <h1>LOGIN</h1>
                <label for="login-email">Email</label>
                <input type="email" name="login-email" id="login-email" required>
                
                <label for="login-password">Password</label>
                <input type="password" name="login-password" id="login-password" required>

                <label for="login-captcha">Captcha</label>
                <input type="text" name="login-captcha" id="login-captcha" required>
                
                <input type="button" name="sb" id="sb" value="LOGIN">
            </form>
        </div>
        <div class="reg">
            <form class="reg-form">
                <h1>REGISTER</h1>
                <label for="reg-name">Name</label>
                <input type="text" name="reg-name" id="reg-name" required>

                <label for="reg-password">Password</label>
                <input type="password" name="reg-password" id="reg-password" required>

                <label for="reg-confirm-password">Confirm Password</label>
                <input type="password" name="reg-confirm-password" id="reg-confirm-password" required>

                <label for="reg-country">Choose Country</label>
                <select name="reg-country" id="reg-country" required>
                    <option value="">Select Country</option>
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                    <option value="australia">Australia</option>
                    <option value="Singapore">Singapore</option>
                    <option value="New Zealand">New Zealand</option>
                </select>
                <label>Do you have a passport?</label>
                <div class="radio-button">
                    <input type="radio" name="passport" id="yes" value="yes">YES
                    <input type="radio" name="passport" id="no" value="no">NO
                </div>
                <div class="check-box">
                    <input type="checkbox" name="declaration" id="declaration">I hereby declare that all the information given above is true.
                </div>
                <input type="button" name="sb" id="sb" value="REGISTER">
            </form>
        </div>
    </div>
    <p style="text-align:center"> &copy; by ByteXL</p>
</body>
</html>
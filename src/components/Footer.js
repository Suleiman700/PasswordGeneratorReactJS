import React from 'react';


function Footer() {
    return (
        <React.Fragment>
            <div className="text-center text-white pt-5">
                <hr />
                <h3>Frequently Asked Questions</h3>


                <h4 className="text-warning mt-5">What is a password generator?</h4>
                <h5>A password generator is a web tool that creates unique and random passwords based on security recommendations. The best password generators are the ones that allow you to customize settings according to your requirements. Our tool has plenty of options for the best result.</h5>

                <h4 className="text-warning mt-5">Is this generator safe to use?</h4>
                <h5>Passwords generated are not stored or shared anywhere else since they are created locally on your computer. Remember not to leave the page unattended to once you're done creating and copying your password.</h5>

                <h4 className="text-warning mt-5">What are the requirements for a strong password?</h4>
                <h5>A strong password is one that is hard to crack. It needs to be as random as possible and have more than eight characters. Also, it must include a combination of upper and lower cases or be a mixture of symbols and a passphrase.</h5>

                <h4 className="text-warning mt-5">What passwords should not be used?</h4>
                <h5>Passwords that you’ve used before, Passwords that are the same as your username, Anything that includes personal information, Words from a dictionary, Common phrases, Popular passwords like password, 123456, qwerty, abc123, iloveyou, 111111, and so on, Anything shorter than 12 characters.</h5>

                <h4 className="text-warning mt-5">How long should my password be?</h4>
                <h5>Your passwords should be at least 12 characters long. However, the longer the password is, the better.</h5>

                <h4 className="text-warning mt-5">Do I need a unique password for every account?</h4>
                <h5>Yes! Using the same password across multiple accounts is a huge no-no. If hackers learn the password to one of your accounts, they’ll have your password for all the others, too.</h5>

                <h4 className="text-warning mt-5">Can a strong password be hacked?</h4>
                <h5>Creating completely uncrackable passwords is becoming a challenge. But you can stand a better chance against hackers by avoiding bad password practices. They include reusing passwords for different accounts, common keyword patterns (such as qwerty), common acronyms (such as ymca), or repeating characters (such as zzz111). Stay on track with your passwords by using our online password generator and password strength checker tools.</h5>

            </div>
        </React.Fragment>
    );
}

export default Footer;

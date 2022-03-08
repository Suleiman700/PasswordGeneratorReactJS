import React, {useEffect, useState} from "react";
import $ from 'jquery';



function PasswordGenerate() {
    const checkboxClass = "form-check-input border border-warning h5"
    const inputClass = "form-control bg-dark text-warning"

    const [state, setState] = useState({
        password: "",
        progress_color: "",
        password_length: 12,
        min_length: 6,
        max_length: 50,
        progress_percent: "0%"
    });



    // Copy password to clipboard
    const copyFull = () => {
        const password = state.password

        // If empty password
        if (!password.length) {
            // Flash password box
            $("#password_box").addClass('fade')
            setTimeout(function () {
                $("#password_box").removeClass('fade')
            }, 200);
        }
        // If not empty password
        else {
            $("#copyBtn").removeClass('bg-dark');

            $("#copyBtn").addClass('bg-success');
            $("#copyIcon").html('✔');

            setTimeout(function () {
                $("#copyBtn").addClass('bg-dark');
                $("#copyIcon").html('📋');
            }, 500);
        }
    }




    // Copy password to clipboard
    const handleCopy = () => {
        copyFull()


        // Get the text field
        var copyText = document.getElementById("password_box");

        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);

        // Lose focus
        copyText.blur()
    }

    // Change password length
    const handleRange = (elm) => {
        const length = elm.target.value // Get length
        $('#length_display').html(length) // Show length to user

        // Update state
        setState(prevState => {
            return {
                ...prevState,
                password_length: length
            };
        });

        handleUpdateSettings()
    }

    // Calculate password score
    const scorePassword = (pass) => {
        var score = 0;
        if (!pass) return score;

        // award every unique letter until 5 repetitions
        var letters = new Object();
        for (var i=0; i<pass.length; i++) {
            letters[pass[i]] = (letters[pass[i]] || 0) + 1;
            score += 2.5 / letters[pass[i]];
        }

        // bonus points for mixing it up
        var variations = {
            digits: /\d/.test(pass),
            lower: /[a-z]/.test(pass),
            upper: /[A-Z]/.test(pass),
            nonWords: /\W/.test(pass),
        }

        var variationCount = 0;
        for (var check in variations) {
            variationCount += (variations[check] == true) ? 1 : 0;
        }
        score += (variationCount - 1) * 10;

        return parseInt(score);
    }

    // Check password strength
    const checkPassStrength = () => {
        const pass = state.password
        const score = scorePassword(pass);
        let score_color = ""

        if (score >= 60) score_color = "green";
        else if (score > 40 && score < 60) score_color = "orange";
        else if (score <= 40) score_color = "red";

        return {score: score, score_color: score_color}
    }


    // Generate used characters
    const getUsedCharacters = () => {
        let used_characters = ""

        // Checkboxes
        const use_numbers = $('#numbers_checkbox').prop('checked');
        const use_symbols = $('#symbols_checkbox').prop('checked');
        const use_lowercase = $('#lowercase_checkbox').prop('checked');
        const use_uppercase = $('#uppercase_checkbox').prop('checked');

        // Set used characters
        if (use_numbers) used_characters += $('#numbers_value').val()
        if (use_symbols) used_characters += $('#symbols_value').val()
        if (use_lowercase) used_characters += $('#lowercase_value').val()
        if (use_uppercase) used_characters += $('#uppercase_value').val()

        return used_characters
    }



    // Update password when change settings
    const handleUpdateSettings = () => {

        const strengtData = checkPassStrength()
        const score = strengtData.score
        const score_color = strengtData.score_color

        // Generate password
        const generatePassword = (length = state.password_length, wishlist = getUsedCharacters()) => Array.from(crypto.getRandomValues(new Uint32Array(length))).map((x) => wishlist[x % wishlist.length]).join('')

        // Update state
        setState(prevState => {
            return {
                ...prevState,
                password: generatePassword(),
                progress_color: score_color,
                progress_percent: score + '%'
            };
        });
    }




    const Checkboxes = {
        numbers: {
            title: 'Numbers',
            checkbox_id: 'numbers_checkbox',
            value: '0123456789',
            value_id: 'numbers_value',
            checked: true
        },
        symbols: {
            title: 'Symbols',
            checkbox_id: 'symbols_checkbox',
            value: '!@#$%^&*()-_.',
            value_id: 'symbols_value',
            checked: true
        },
        lowercase: {
            title: 'Lowercase',
            checkbox_id: 'lowercase_checkbox',
            value: 'abcdefghijklmnopqrstuvwxyz',
            value_id: 'lowercase_value',
            checked: true
        },
        upercase: {
            title: 'Uppercase',
            checkbox_id: 'uppercase_checkbox',
            value: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            value_id: 'uppercase_value',
            checked: true
        }
    }


    return (
        <React.Fragment>
            <div className="pt-5">
                <div className="input-group form-top-section mb-3">
                    <input type="text" className="form-control PassBox-Text bg-light" id="password_box" placeholder="Generator Password Here" value={state.password} />
                    <div className="input-group-append d-flex align-items-center PassBox-Copy bg-dark px-5" id="copyBtn" onClick={handleCopy}>
                        <span className="text-white icon" id="copyIcon">📋</span>
                    </div>
                    <div className="progress PasswordStrength" style={{width: '100%'}}>
                        <progress className="progress-bar" role="progressbar" id="health" value={state.progress_percent} max="100" style={{background: state.progress_color,   paddingTop: '40px', width: state.progress_percent}}></progress>
                    </div>
                </div>
            </div>


            <div className="mx-3 pt-5">

                <div className="col-12 text-white">
                    <div className="row">
                        <div className="col-12" style={{position: 'relative'}}>
                            <div className="form-footer-main-column">
                                <h6>Password Length</h6>
                                <input type="range" id="range" className="password-length-range" min={state.min_length} max={state.max_length} step="1" onChange={((e) => handleRange(e))} style={{paddingRight: '5%'}} defaultValue={state.password_length} />
                                <div className="length-display" id="length_display">{state.password_length}</div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {Object.keys(Checkboxes).map((item, i) => (
                            <div className="col-12 col-md-6 mt-3" key={i}>
                                <div className="form-group">
                                    <div className="form-check">
                                        <input className={checkboxClass} type="checkbox" id={Checkboxes[item]['checkbox_id']} onChange={handleUpdateSettings} defaultChecked={Checkboxes[item]['checked']} />
                                        <label className="form-check-label h4" htmlFor={Checkboxes[item]['checkbox_id']}>{Checkboxes[item]['title']}</label>
                                    </div>
                                    <input type="text" className={inputClass} id={Checkboxes[item]['value_id']} defaultValue={Checkboxes[item]['value']} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="col-12 text-center mt-5">
                <button className="btn btn-warning text-white" onClick={handleUpdateSettings}><h5>Generate Password</h5></button>
            </div>
        </React.Fragment>
    );

}

export default PasswordGenerate;

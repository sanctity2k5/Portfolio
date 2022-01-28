import React, { Component } from 'react';

class CommentItems extends Component {
    render() {
        return (
            <div>
        <form className = "form" method = "POST">
  <fieldset>
    <legend>Reach Out Now!</legend>
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname" /><br /><br />
    <label for="lname">Phone Number:</label>
    <input type="Number" id="phonenumber" name="phonenumber" /><br /><br />
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" /><br /><br />
    <label for="birthday">Message:</label>
    <input type="textarea" row ="3" id="birthday" name="textarea" /><br /><br />
    <input type="submit" value="Submit" />
  </fieldset>
</form>

            </div>
        )
    }
}


export default CommentItems;
import React from 'react';
import image from "./images/images.jpg";
import { connect } from "react-redux";



import { Component } from 'react';
class Typeform extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return <a href="/auth/google" className="check">Login with <i class="fa fa-google" aria-hidden="true">oogle </i></a>;
            case false:
                return <a href="/auth/google" className="check">Login with <i class="fa fa-google" aria-hidden="true">oogle </i></a>;
            default:
                return [

                    <a href="/api/logout" className="logout">Logout <i class="fa fa-sign-out" aria-hidden="true"></i></a>
                ];



        }
    }
    render() {
        console.log(this.props)
        return (
            <div className="container">
                <form>
                    <div>
                        <h3>1</h3><span>Mobile Number*</span>
                        <h4>कृपया अपना मोबाइल नंबर दर्ज करें</h4>
                        <input type="tel" required></input>
                    </div>
                    <div>
                        <h3>2</h3><span>Whatsapp Number</span>
                        <h4>व्हाट्सएप नंबर</h4>
                        <input type="tel" required></input>
                    </div>
                    <div>
                        <h3>3</h3><span>Name*</span>
                        <h4>कृपया अपना पूरा नाम लिखें जैसा पैन कार्ड पर है</h4>
                        <input type="tel" required></input>
                    </div>
                    <div>
                        <h3>4</h3><span>Father's Name / Husband's Name*</span>
                        <h4>कृपया पिता / पति का पूरा नाम लिखें जैसा पैन कार्ड पर है</h4>
                        <input type="tel" required></input>
                    </div>
                    <div>
                        <span>5</span><span>Permanent Address*</span>
                        <h4>स्थायी पता</h4>
                        <input type="tel" required></input>
                    </div>
                    <div>
                        <span>6</span><span>Father's Name / Husband's Name*</span>
                        <h4>कृपया पिता / पति का पूरा नाम लिखें जैसा पैन कार्ड पर है</h4>
                        <input type="tel" required></input>
                    </div>
                    <div>
                        <span>6</span><span>Current Address (Write Same, if Same as Permanent Address) *</span>
                        <h4>वर्तमान पता यदि स्थायी पता हो तो लिखें "Same"_____</h4>
                        <input type="tel" required></input>
                    </div>
                    <div>
                        <span>7</span><span>Email Address *</span>
                        <h4>ईमेल पता</h4>
                        <input type="tel" required></input>
                    </div>
                    <div>
                        <span>8</span><span>Loan Amount*</span>
                        <h4>ऋण धन राशि</h4>
                        <input type="tel" required></input>
                    </div>
                    <div>
                        <span>9</span><span>Loan Tenure (Processing Fee (प्रोसेसिंग शुल्क)300 ; Interest Rate (ब्याज दर) 1.23%)*</span>
                        <h4>ऋण की अवधि</h4>
                        <input type="tel" required></input>
                    </div>
                    <div>
                        <span>10</span><span>I (“the Applicant(s)”), hereby unconditionally and irrevocably declare and confirm that: 1. The
                        application for a lending facility (“Facility”) from Pluto Consultancy Management Private Limited
                        (“the Lender/ Company”) 2 I fully acknowledge that the grant of the Facility is at the sole discretion
                        of Lender and also acknowledge that the Lender reserves the right to reject my application for such a
                        Facility without assigning any reasons whatsoever; the Lender will not be responsible/liable in any
                        manner whatsoever to me/us for such rejection or any delay in notifying me of such rejection, of my
                        application 3. I understand and acknowledge that the Lender and/or the Company reserve the right to
                        retain all applicable information, photographs and other KYC documents submitted by me (forming part
                        of such application and this declaration) and may not return the same to me 4. I authorize the Lender/
                        Company, their agents to make references and enquires relevant to information in this application
                        form as per their discretion. Further, I have no objection to the Lender and/or Company from sending
                        me promotional offers of their products or services (including those of their subsidiaries, affiliates or
                        associate companies 5. I have noted that the Lender has a Policy as per which applicable rate of
                        interest is determined based on various types of risks, cost of funds, tenor of the loan, collateral,
                        amount of loan etc. and rate of interest may differ from customer to customer and loan to loan. 6. I
                        confirm that I have gone through the Interest Rate policy and Schedule of Charges of the Lender, which
                        are also available on its website; 7. I also acknowledge that the Company shall have the right to seek
                        information pertaining to [me/us] from regulatory authorities and other third parties including, inter-
                        alia, the RBI, the CIBIL, etc. in accordance with applicable law 8. I confirm that I have read and
understood the contents of the application form and I am agreeable to the terms and conditions.This question is required. *</span>
                        <button >Yes</button>
                        <button >No</button>

                    </div>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
function mapStateToProps({ auth }) {
    return { auth };
}
export default connect(mapStateToProps)(Typeform);
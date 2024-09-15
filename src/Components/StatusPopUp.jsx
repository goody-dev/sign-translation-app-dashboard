import React from 'react'
import SuccessIcon from '../assets/icons/success-circle.svg'
import FailedIcon from '../assets/icons/failed-circle.svg'
import CautionIcon from '../assets/icons/caution-circle.svg'

const StatusPopUp = ({status, message}) => {
  return (
    <div aria-live='assertive' className={'popup-shadow ' + (status === "info"? "bg-[var(--pending-color)]": status === "success"? "bg-[var(--success-color)]": status === "failed"? "bg-[var(--failed-color)]": status==="pending"? null: null) + ' fixed self-center bottom-[3.2rem] flex flex-row gap-[var(--inline-gap)] p-[var(--popup-padding)] rounded-[5px]'}>
      <img src={status === "info"? CautionIcon: status === "success"? SuccessIcon:status === "failed"? FailedIcon: null}/>
      <p>{message}</p>
    </div>
  )
}

// /* Component 1 */

// box-sizing: border-box;

// position: relative;
// width: 327px;
// height: 282px;

// border: 1px dashed #9747FF;
// border-radius: 5px;


// /* Property 1=Frame 27 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 10px 15px;
// gap: 15px;

// position: absolute;
// width: 287px;
// height: 44px;
// left: calc(50% - 287px/2);
// top: 20px;

// background: #E2F3DF;
// box-shadow: 1px 1px 7px rgba(47, 54, 118, 0.1);
// border-radius: 5px;


// /* Vector */

// width: 20px;
// height: 20px;

// background: #343434;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;


// /* Uploaded Successfully! */

// width: 222px;
// height: 24px;

// font-family: 'Inter';
// font-style: normal;
// font-weight: 400;
// font-size: 20px;
// line-height: 24px;

// color: #343434;


// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;


// /* Property 1=Frame 26 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 10px 15px;
// gap: 15px;

// position: absolute;
// width: 232px;
// height: 44px;
// left: calc(50% - 232px/2 - 27px);
// top: 114px;

// background: #F3E0E0;
// box-shadow: 1px 1px 7px rgba(47, 54, 118, 0.1);
// border-radius: 5px;


// /* Vector */

// width: 20px;
// height: 20px;

// background: #343434;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;


// /* Invalid! Try Again! */

// width: 167px;
// height: 24px;

// font-family: 'Inter';
// font-style: normal;
// font-weight: 400;
// font-size: 20px;
// line-height: 24px;

// color: #343434;


// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;


// /* Property 1=Frame 28 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 10px 15px;
// gap: 15px;

// position: absolute;
// width: 186px;
// height: 44px;
// left: calc(50% - 186px/2 - 50px);
// top: 208px;

// background: #FDFDFD;
// box-shadow: 1px 1px 7px rgba(47, 54, 118, 0.1);
// border-radius: 5px;


// /* Vector */

// width: 20px;
// height: 20px;

// background: #343434;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;


// /* Processing... */

// width: 121px;
// height: 24px;

// font-family: 'Inter';
// font-style: normal;
// font-weight: 400;
// font-size: 20px;
// line-height: 24px;

// color: #343434;


// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;



export default StatusPopUp

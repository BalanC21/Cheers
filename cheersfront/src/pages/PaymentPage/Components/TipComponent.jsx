import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {selectTip} from '../PaymentSlice'

const TipComponent = () => {
	const dispatch = useDispatch();
	const [tip, setTip] = useState(10);
	const SIZES = ['0', '5', '10', '15', '20'];

	useEffect(() => {
		dispatch(selectTip(tip));
	}, [tip]);

	let onChange = (e) => {
		e.preventDefault()
		setTip(e.target.value)
	}

	return (
		<div className="mt2x">
			<span
				className="tip-select_tipSelectDescription__HGXCU text-small color-gray">
            	<div className="a-tipping-copy">
					We have pre-set a 10% contribution for Cheers. Your contribution helps us provide a safe and reliable fundraising service.
					<strong>
						You can select a different percentage from the drop-down menu or eliminate this contribution by clicking on the link below.
					</strong>
				</div>
			</span>
			<div className="tip-select_tipSelectTip__dEH0C">
				<div
					className="tip-select_tipSelectTipSelection__ZVNDJ hrt-select-field">
					<div className="hrt-select-field-wrapper">
						<select
							onChange={(e) => onChange(e)}
							aria-invalid="false"
							className="hrt-select-field-select"
							id="donation-tip-option" name="tipOption"
							defaultValue={tip}>
							{SIZES.map(elem => <option value={elem}>{elem} % </option>)}
						</select>
						<label className="hrt-select-field-label"
							   htmlFor="donation-tip-option">
							Tip amount
						</label>
						<svg aria-hidden="true"
							 className="hrt-select-field-icon hrt-icon hrt-icon--large"
							 focusable="false" viewBox="0 0 24 24">
							<use
								href="/_next/static/images/navigation-icons-d4d68bf240b8378d4436209adbaa5a60.svg#caret-down">
							</use>
						</svg>
					</div>
				</div>
				<span className="tip-select_tipRemoveLink__7fpuy text-small color-gray">
                        Don’t want to leave a contribution?
                        <button className="text-small color-dark-gray hrt-text-button hrt-text-button--gray-dark"
								type="button">
                            REMOVE IT BY CLICKING HERE
                        </button>
                </span>
			</div>
		</div>
	)
};

export default TipComponent;
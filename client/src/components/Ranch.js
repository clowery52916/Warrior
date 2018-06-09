import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';

class FormRow extends React.Component{

	render() {
		return <div className="row">
			<label>{this.props.Title}</label>
			<div className="control">{this.props.children}</div>
		</div>;
	}
}

class Column extends React.Component{
	render() {
		var col = "Column Col" + this.props.Col;
		return <div className={col}>{this.props.children}</div>;
	}
}


class InputBox extends React.Component{
	render () {
		return <input />;
	}
}
class SelectBox extends React.Component {
	render () {
		return <select><option value="1">Option</option></select>;
	}
}
class MultiLanguageTextBox extends React.Component{
	render () {
		return <div><div className="multiLang"><InputBox /><br />
			<a className="lang">en</a>
			<a className="lang">de</a>
			<a className="lang">fr</a></div>
		</div>;
	}
}
class IconButton extends React.Component{
	render () {
		return <button>{this.props.Icon}</button>;
	}
}

class LongLat extends React.Component {
	render () {
		return <div className="LongLat"><InputBox /><InputBox /><IconButton Icon="⛯"/></div>;
	}
}
class TelephoneEditBox extends React.Component {
	render () {
		return <div className="telephone"><InputBox /><IconButton Icon="📞"/></div>;
	}
}
class EmailEditBox extends React.Component {
	render () {
		return <div className="telephone"><InputBox /><IconButton Icon="@"/></div>;
	}
}
class MultiLanguageWebsite extends React.Component {
	render () {
		return <div className="MultiLangAction"><MultiLanguageTextBox /><IconButton Icon="🕸"/></div>;
	}
}
class CheckBox extends React.Component {
	render () {
		return <label><input type="checkbox" />{this.props.Item}</label>;
	}
}


export default class Ranch extends Component {
	render () {
		return (
       <div className="form">
				 <br/>
				 <br/>
			 <br/>
			<Column Col="1">

				<FormRow Title="Country">
					<SelectBox />
				</FormRow>
			<FormRow Title="Address">
					<InputBox /><br />
					<InputBox /><br />
					<InputBox /><br />
				</FormRow>
			<FormRow Title="Town">
					<InputBox />
				</FormRow>
			<FormRow Title="County">
					<InputBox />
				</FormRow>
			<FormRow Title="Postal Code">
					<InputBox />
				</FormRow>
			</Column>
			<Column Col="2">
			<FormRow Title="Telephone">
					<TelephoneEditBox />
				</FormRow>
			<FormRow Title="Telephone2">
					<InputBox />
				</FormRow>
				<FormRow Title="Fax">
					<InputBox />
				</FormRow>
				<FormRow Title="Email">
					<EmailEditBox />
				</FormRow>
			</Column>
			<br />
			<br />
			<br/>
    </div>);
	}
}

import React from "react";

export default class SearchForm extends React.Component {

    handleChange(event) {
        console.log("Hello handleChange")
    }

    render() {
        return (
            <div className={"card-search"}>
                <div className={"search-form"}>
                    <button><img src={"/content/svg/search.svg"} alt="" /></button>
                    <input type="text" name="searchUser" placeholder="Search a person" onChange={(e) => this.handleChange(e)} />
                </div>
            </div>
        )
    }
}
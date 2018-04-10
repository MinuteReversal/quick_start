import React from "react";
import ReactDOM from "react-dom";

class TestForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "zhy",
            age: 31,
            gender: "男",
            isMarried: false,
            favorite: ["音乐"],
            address: "昆明",
            language: ["C", "Java"]
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        var value = target.value;
        let field = this.state[name];

        if (target.type === "checkbox") {
            if (typeof field === "boolean") {
                value = target.checked;
            }
            else if (field instanceof Array) {
                value = this.handelMulti(field, value);
            }
        }
        else if (target.type === "select-multiple" && target.multiple) {
            var a = [];
            for (let i = 0; target.selectedOptions[i]; i++) {
                let item = target.selectedOptions[i];
                a.push(item.value);
            }
            value = a;
        }

        this.setState({
            [name]: value
        });
    }
    handelMulti(arr, value) {
        let index = arr.indexOf(value);
        if (index > -1) {
            arr.splice(index, 1);
        }
        else {
            value = arr.push(value)
        }
        return arr;
    }
    handleGetData() {
        alert(JSON.stringify(this.state));
    }
    handelSetData() {
        this.setState({
            name: "zhy",
            age: 31,
            gender: "男",
            isMarried: false,
            favorite: ["音乐"],
            address: "昆明",
            language: ["C", "Java"]
        });
    }
    render() {
        return (
            <fieldset>
                <legend>个人信息收集</legend>
                <div>
                    <label htmlFor="name">姓名</label><input id="name" name="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
                </div>
                <div>
                    <label htmlFor="age">年龄</label><input id="age" name="age" type="number" value={this.state.age} onChange={this.handleInputChange} />
                </div>
                <div>
                    <input type="radio" name="gender" id="female" value="女" checked={this.state.gender === '女'} onChange={this.handleInputChange} /><label htmlFor="female">女</label>
                    <input type="radio" name="gender" id="male" value="男" checked={this.state.gender === '男'} onChange={this.handleInputChange} /><label htmlFor="male">男</label>
                </div>
                <div>
                    <label htmlFor="isMarried">已婚</label><input id="isMarried" name="isMarried" value="是" type="checkbox" checked={this.state.isMarried} onChange={this.handleInputChange} />
                </div>
                <div>
                    <div>
                        <input id="music" name="favorite" value="音乐" type="checkbox" checked={this.state.favorite.includes('音乐')} onChange={this.handleInputChange} /><label htmlFor="music">听音乐</label>
                    </div>
                    <div>
                        <input id="footerball" name="favorite" value="足球" type="checkbox" checked={this.state.favorite.includes('足球')} onChange={this.handleInputChange} /><label htmlFor="footerball">踢足球</label>
                    </div>
                    <div>
                        <input id="basketball" name="favorite" value="篮球" type="checkbox" checked={this.state.favorite.includes('篮球')} onChange={this.handleInputChange} /><label htmlFor="basketball">打篮球</label>
                    </div>
                </div>
                <div>
                    <label htmlFor="language">住址</label>
                    <select id="address" name="address" value={this.state.address} onChange={this.handleInputChange}>
                        <option value="昆明">昆明</option>
                        <option value="呈贡">呈贡</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="language">掌握的编程语言</label><br />
                    <select id="language" name="language" multiple={true} value={this.state.language} onChange={this.handleInputChange}>
                        <option value="Basic">Basic</option>
                        <option value="C">C</option>
                        <option value="C++">C++</option>
                        <option value="C#">C#</option>
                        <option value="Java">Java</option>
                        <option value="Javascript">Javascript</option>
                        <option value="Python">Python</option>
                        <option value="Ruby">Ruby</option>
                    </select>
                </div>
                <input type="button" value="获取数据" onClick={this.handleGetData.bind(this)} />
                <input type="button" value="设置数据" onClick={this.handelSetData.bind(this)} />
            </fieldset>
        );
    }
}

export default class Main {
    constructor() {
        ReactDOM.render(
            <TestForm />,
            document.getElementById("root")
        );
    }
}
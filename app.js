class Home extends React.Component {
    render() {
        return (
            <div>
            <h1>TV Maze React</h1>
                <SearchBar />
            </div>
        )
    }
}

class SingleMovie extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.img} />
                <h4>{this.props.name}</h4>
            </div>
        )
    }
}
 
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        //setting default state
        this.state = {
            input: "",
            stateResults : false,
        };
        this.inputChange = this.inputChange.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
    }

    inputChange(event) {
        let inputValue = event.target.value;
        this.setState (
            { 
                input : inputValue,
            }
        )
        
    }

    buttonClick() {
        //on button click check for matching titles
        let searchResults = [];
        // searchResults is an array to store the results
        let searchTerms = this.state.input
        //searchTerms gets the current input value
        console.log("searching for " + searchTerms);
        //loop through results and look for matching names then pushes it into searchResults array
        if (searchTerms == "") {
            searchResults = [];
        } else {
            for (let i = 0; i < results.length; i++) {
                //conditionals needs checking
                if (results[i].show.name.toLowerCase().includes(searchTerms.toLowerCase())) {
                    searchResults.push(results[i])
                }
            }
        }
        
        this.setState (
            {
                input: "",
                stateResults : true,
                //store search results in this.state.afterSearch
                afterSearch : searchResults
            }
        )
    }

    render() {   
        // console.log(this.state.afterSearch)
        let results;
        if (this.state.stateResults) {        
            //store this.state.afterSearch in the dataset prop which is accessed using this.props.dataset in the Results component
            results = <Results dataset={this.state.afterSearch} />
        } else {
            results = <div></div>
        }
        return (
            <div id="search">
            <input onChange={this.inputChange} value={this.state.input} />
            <button type="button" onClick={this.buttonClick}>Search</button>
            {results}
      </div>
        )
    }
}

class Results extends React.Component {
    render() {
        // use this.props to pass data around components
        let data = this.props.dataset.map((show, index) => {
            return <SingleMovie key={index} name={show.show.name} img={show.show.image.medium} />
        });
        return (
            <ul>
                {data}
            </ul>
        )
    }
}

ReactDOM.render(
    <Home />,
    document.getElementById('root')
)
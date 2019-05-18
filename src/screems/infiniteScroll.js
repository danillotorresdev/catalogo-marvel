import React, { Component } from "react";
import { connect } from 'react-redux'
import ActionCreators from '../redux/actionCreators'
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8
};

class InfiniteScrollWithCharacters extends Component {
    state = {
        items: [Array.from({ length: 20 })]
    };
    componentDidMount() {
        this.props.loadCharacters()
    }
    fetchMoreData = () => {
        this.props.loadNewsCharacters()

        setTimeout(() => {
            this.setState({
                items: this.props.characters.newsData.results
            })
        }, 1500);
    };

    render() {
        return (
            <div>
                <h1>demo: react-infinite-scroll-component</h1>
                <hr />
                {JSON.stringify(this.props ? this.state.items.length : 'nao rola')}
                <InfiniteScroll
                    dataLength={
                        this.props.characters.data.results ?
                            this.props.characters.data.results.length : 'n rola'}
                    next={this.fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                >
                    {this.state.items.map((i, index) => (
                        <div style={style} key={index}>
                            div - #{index}
                        </div>
                    ))}
                </InfiniteScroll>
            </div>
        );
    }
}

const mapStateToPros = state => {
    return {
        characters: state.characters,
        newsCharacters: state.newsCharacters
    }
}
const mapDispatchToProps = dispatch => {
    return {
        loadCharacters: () => dispatch(ActionCreators.getCharactersRequest()),
        loadNewsCharacters: () => dispatch(ActionCreators.getNewsCharactersRequest())
    }
}

export default connect(mapStateToPros, mapDispatchToProps)(InfiniteScrollWithCharacters)

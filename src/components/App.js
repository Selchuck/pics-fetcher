import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = { images: [] };

    async onSearchSubmit(term) {
        const response = await axios
            .get('https://api.unsplash.com/search/photos', {
                params: {
                    query: term
                },
                headers: {
                    Authorization: 'Client-ID L_GPQXotYLuLBEQEn5EM_TbV0VTm9C4MEbMtOkoVBTU'
                }
            });
            this.setState({ images: response.data.results })
        }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onQuerrySubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length} images
            </div>
        );
    }
};

export default App;

import logo from './logo.svg';
import './App.css';
import "react-image-gallery/styles/css/image-gallery.css";
import { SearchComponent } from './components/Search';
import { GridGif } from './components/GridGif';
import { useEffect, useState } from 'react';
// import { useFetch } from './hooks/useFetch';
import { getGitf } from './helpers/getGif';
import { useFetch } from './hooks/useFetch';

function App() {
  const [search, setSearch] = useState('')
  const { data } = useFetch(search);

  const habdleSearch = (value) => {
    setSearch(value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <SearchComponent onSearch={habdleSearch} />
        <GridGif gifts={data} category={search} />
      </header>
    </div>
  );
}

export default App;

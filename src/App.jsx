import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SerieList from './components/SerieList';
import SubserieList from './components/SubserieList';
import seriesDocumentales from './components/seriesDocumentales.json';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedSerie, setSelectedSerie] = useState(null);
  const [selectedSubserie, setSelectedSubserie] = useState(null);

  const handleSearch = () => {
    // Esta función no necesita parámetros, ya que utiliza el estado interno searchText
    setSelectedSerie(null);
    setSelectedSubserie(null);
  };

  const handleSerieClick = (serie) => {
    setSelectedSerie(serie);
    setSelectedSubserie(null);
  };

  const handleSubserieClick = (subserie) => {
    setSelectedSubserie(subserie);
  };

  const filteredSeries = seriesDocumentales.SeriesDocumentales.filter(serie =>
    serie.nombre.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredSubseries = selectedSerie ? selectedSerie.subseries : [];

  return (
    <div>
      <h1>Buscador de Series</h1>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearch={handleSearch}
      />
      {/* Mostrar la lista de series */}
      {!selectedSerie && <SerieList series={filteredSeries} handleSerieClick={handleSerieClick} />}
      {/* Mostrar la lista de subseries */}
      {selectedSerie && !selectedSubserie && <SubserieList subseries={filteredSubseries} handleSubserieClick={handleSubserieClick} />}
      {/* Mostrar los detalles de la subserie seleccionada */}
      {selectedSubserie && (
        <div>
          <h2>Subserie: {selectedSubserie.nombre}</h2>
          <p>Tipologías Documentales: {selectedSubserie.tipologias.join(', ')}</p>
          <p>Procedimientos: {selectedSubserie.procedimientos.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default App;

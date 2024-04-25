

const Subseries = ({series, serieSel}) => {
  
  return (
    <article>
     
      <h2>Nombre:{series[serieSel].subseries[0].nombre}</h2>
      <h2>Tipologías:</h2>
      <ul>    
        <li>{series[serieSel].subseries[0].tipologias[0]}</li>
        <li>{series[serieSel].subseries[0].tipologias[1]}</li>
        <li>{series[serieSel].subseries[0].tipologias[2]}</li>
      </ul> 
      <h2>Procedimientos:</h2>
      <ul>    
        <li>{series[serieSel].subseries[0].procedimientos[0]}</li>
        <li>{series[serieSel].subseries[0].procedimientos[1]}</li>
        <li>{series[serieSel].subseries[0].procedimientos[2]}</li>
      </ul> 

      <h2>Nombre:{series[serieSel].subseries[1].nombre}</h2>
      <h2>Tipologías:</h2>
      <ul>    
        <li>{series[serieSel].subseries[1].tipologias[0]}</li>
        <li>{series[serieSel].subseries[1].tipologias[1]}</li>
        <li>{series[serieSel].subseries[1].tipologias[2]}</li>
      </ul> 
      <h2>Procedimientos:</h2>
      <ul>    
        <li>{series[serieSel].subseries[1].procedimientos[0]}</li>
        <li>{series[serieSel].subseries[1].procedimientos[1]}</li>
        <li>{series[serieSel].subseries[1].procedimientos[2]}</li>
      </ul> 
      
    </article>
  );
};

export default Subseries;

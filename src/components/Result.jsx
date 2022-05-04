import style from '@emotion/styled';

const Result = ({ result }) => {
  const { PRICE, HIGHTDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    result;
  return (
    <div>
      <p>
        El precio es de: <span>{PRICE}</span>
      </p>
      <p>
        El precio mas alto del dia: <span>{HIGHTDAY}</span>
      </p>
      <p>
        El precio mas bajo del dia: <span>{LOWDAY}</span>
      </p>
      <p>
        Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
      </p>
      <p>
        Ultima actualizacion: <span>{LASTUPDATE}</span>
      </p>
    </div>
  );
};

export default Result;

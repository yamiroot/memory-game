import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Footer from '../components/Footer';


afterEach(cleanup);


// jest

// - expect(value): Se usa cada vez que desea probar un valor. Raramente
// llamarás a expect solo. En su lugar, lo usará junto con una función de
// "coincidencia" para afirmar algo sobre un valor.

// - afterEach: Ejecuta una función después de completar cada una de las
// pruebas en este archivo. Si la función devuelve una promesa o es un
// generador, Jest espera a que se resuelva esa promesa antes de continuar.

// - it: Método que ejecuta una prueba. El primer argumento que recibe es el
// nombre de la prueba. El segundo argumento es una función que contiene las
// expectativas para probar. El tercer argumento (opcional) es timeout(en
// milisegundos) para especificar cuánto tiempo esperar antes de abortar.


// @testing-library/react -> dom

// - queryByTestId: Devuelve el primer nodo coincidente de acuerdo al id y
// devuelve null si no coincide ningún elemento. Esto es útil para afirmar
// un elemento que no está presente.

// - cleanup: Desmonta árboles que se montaron con render.

// - render: Procesa en un contenedor que se adjunta a document.body.
// El método devuelve un objeto que tiene algunas propiedades, entre
// ellas a los queries.

// queries:
// Argumentos vinculados al elemento base.


// @testing-library/jest-dom

// - toBeInTheDocument: Permite afirmar si un elemento está presente en el
// documento o no.


it('El componente Footer se encuentra renderizado en el documento.', () => {
  const { queryByTestId } = render(<Footer />);

  expect(queryByTestId('footer')).toBeInTheDocument();
});

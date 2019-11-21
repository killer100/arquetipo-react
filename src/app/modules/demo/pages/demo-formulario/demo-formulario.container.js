import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import withReducer from 'app/store/withReducer';

import { formularioActionsCreators } from './redux/actions/demo-formulario.action';
import reducer from './redux/reducers';

const DemoFormulario = () => {
  const dispatch = useDispatch();
  const [titulo, setTitulo] = useState('');
  const state = useSelector(
    ({ paginaFormulario }) => paginaFormulario.demoFormulario
  );

  return (
    <div>
      {state.title}
      <input
        type="text"
        value={titulo}
        onChange={e => setTitulo(e.target.value)}
      />
      <button
        onClick={e => dispatch(formularioActionsCreators.SET_TITLE(titulo))}
      >
        cambiar titulo
      </button>
    </div>
  );
};

export default withReducer('paginaFormulario', reducer)(DemoFormulario);

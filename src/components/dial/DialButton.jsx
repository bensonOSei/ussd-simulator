import PropTypes from 'prop-types';  
import { AppConfigContext } from '../../services/app-config-services/AppConfigContext';
import { useContext } from 'react';

export const DialButton = ({ number }) => {
  const { addToDisplay } = useContext(AppConfigContext);
  return (
    <button 
      onClick={() => addToDisplay(number)}
    className='p-2 bg-slate-200 hover:bg-slate-200 dark:bg-slate-700 hover:dark:bg-slate-800 dark:text-slate-50 transition-all rounded-3xl text-3xl font-bold'>
        {number}
    </button>
  )
}


DialButton.propTypes = {
    number: PropTypes.string.isRequired
}
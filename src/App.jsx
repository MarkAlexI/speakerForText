import React, { useState } from 'react';
import Button from 'reactstrap/lib/Button';

export const App = () => {
  const [state, setState] = useState("ready");

  return (
    <div className="row">
      <div className="col-xs-6 col-md-4">
        <div className="text-center">
          <p>%©®™</p>
          <p>{state}</p>
          <Button
            color="warning"
            onClick={function() {
              console.log(this);
              setState('go');
              return;
              }
            }
            >Push!
          </Button>
        </div>
       </div>
    </div>
  )
};
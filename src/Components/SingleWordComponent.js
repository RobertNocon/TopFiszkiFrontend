import React from 'react';

const SingleWordComponent = ({ wordpl, worden, id, Fn, Fn2 }) => (
    <div className='singleTasc'>
        {/* <h2>{props.name}</h2> */}

        <div className="singleTascBox">
            <div className="titleAndButtonBox">
                <p className="tascName">{wordpl} : {worden}</p>

                
                <button id={`'del'+$id`} onClick={Fn2} className="buttonEdit" type="button">Edytuj</button>
                <button id={id} onClick={Fn} className="buttonDelete" type="button">Usuń</button>
                <button id={id}  className="buttonWiem" type="button">Wiem</button>
                <button id={id}  className="buttonMniej" type="button">Mniej więcej</button>
                <button id={id}  className="buttonNie" type="button">Nie wiem</button>
                {/* <p>{props.state}</p> */}
            </div>
            {/* <hr /> */}
            {/* <div className="descBox">
                <p>{worden}</p>
            </div> */}

        </div>

    </div>
)

export default SingleWordComponent;

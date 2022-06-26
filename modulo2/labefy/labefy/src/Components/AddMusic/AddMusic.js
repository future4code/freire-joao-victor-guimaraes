import React from 'react';

const AddMusic = (props) => {


    return (
        <div>
            <div>
                <br></br>
                <h2>Digite o nome da sua Playlist...</h2>

                <label>
                    Nome da Música: &nbsp;
                    <input type='text' placeholder='Música' ></input>
                </label>
                <label>
                    Nome do Artista: &nbsp;
                    <input type='text' placeholder='Artista' ></input>
                </label>
                <label>
                    Link do YouTube: &nbsp;
                    <input type='text' placeholder='link' ></input>
                </label>
            </div>






        </div>

    );
};

export default AddMusic;
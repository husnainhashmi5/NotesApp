import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';

const Notepage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [note, setNote] = useState(null);

    useEffect(() => {
        const getNote = async () => {
            if (id === 'new') return
            const response = await fetch(`/api/notes/${id}/`);
            const data = await response.json();
            setNote(data);
        };

        getNote();
    }, [id]);

    const getUpdate = async () => {

        await fetch(`/api/notes/${id}/update/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note)
        });
    };
    const createNote = async () => {
        await fetch(`/api/notes/create/`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(note)
            })
    }
    const deleteNote = async () => {
        await fetch(`/api/notes/${id}/delete/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },

        })
        navigate('/');
    };


    const handleSubmit = () => {
        if (id === "new" && note && note.body !== '') {
            createNote();
        } else if (id !== "new" && note && note.body === '') {
            deleteNote();
        } else if (id !== 'new' && note && note.body !== null) {
            getUpdate();
        }
        navigate('/');
    };
    
    const handleChange=(value)=>{
        setNote(
            note=>({...note, 'body': value})
        )
    }

    return (
        <div className='note'>
            <div className='note-header'>
                <h3>
                    <ArrowLeft onClick={handleSubmit} />
                </h3>
                {
                    id !== 'new' ? (<button onClick={deleteNote}>  Delete</button>) : (<button onClick={handleSubmit}>  Done</button>)
                }

            </div>
            <textarea value={note?.body} onChange={(e) => { handleChange(e.target.value) }}></textarea>
        </div>
    );
};

export default Notepage;

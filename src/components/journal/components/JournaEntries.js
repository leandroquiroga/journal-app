import React from 'react'
import { useSelector } from 'react-redux';
import { JournalEntry } from './JournalEntry';

export const JournaEntries = () => {
  
  const notes = useSelector(state => state.notes.notes);
  return (
    <div className='journal__entries'>
      { 
        notes.map(note => (
          <JournalEntry
            key={note.id} 
            {...note}
          />
        ))
      }
    </div>
  )
}

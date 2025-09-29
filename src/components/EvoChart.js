import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { pokeAPIIndividual } from './PokeAPI';
import { isValidDateValue } from '@testing-library/user-event/dist/utils';

function EvoChart({evoChain}) {

  let evoChainArr = [];

  function traverseObject(obj) {
    for(let key of Object.keys(obj)) {
      if(obj.hasOwnProperty(key)) {
        const value = obj[key];
        if(typeof value === 'object' && value !== null) {
          if(key === 'evolves_to' && value[0] !== undefined) {
            for(let i=0; i<value.length; i++) {
              if(value[i].evolution_details[0].item !== null) {
                evoChainArr.push(<p className='evo-text'>- {value[i].evolution_details[0].item.name} &#8594;</p>);
              } 
              // else if (value[i].evolution_details[0].held_item) {
              //   if(value[i].evolution_details[0].time_of_day) {
              //     evoChainArr.push(<p className='evo-text'>- Level Up Holding {value[i].evolution_details[0].held_item.name} during {value[i].evolution_details[0].time_of_day} &#8594;</p>);
              //   } else {
              //     evoChainArr.push(<p className='evo-text'>- Level Up Holding{value[i].evolution_details[0].held_item} &#8594;</p>);
              //   }
              // }
               else if (value[i].evolution_details[0].min_happiness) {
                evoChainArr.push(<p className='evo-text'>- Level Up Happiness &#8594;</p>);
              } else if(value[i].evolution_details[0].min_level) {
                evoChainArr.push(<p className='evo-text'>- Level Up {value[i].evolution_details[0].min_level} &#8594;</p>);
              } else if (value[i].evolution_details[0].trigger) {
                evoChainArr.push(<p className='evo-text'>- {value[i].evolution_details[0].trigger.name} &#8594;</p>);
              } else {
                evoChainArr.push(<p>This Pokemon does not Evolve</p>)
              }
              evoChainArr.push(<p className='text-capitalize'>{value[i].species.name}</p>);
            }
          } 
          traverseObject(value)
        } 
        
      }
    }
  }
  
  function traverseObjectEevee(objEevee) {
      for(let key of Object.keys(objEevee)) {
        if(objEevee.hasOwnProperty(key)) {
          const valueEevee = objEevee[key];
          if(typeof valueEevee === 'object' && valueEevee !== null) {
            for(let i =0; i<valueEevee.length; i++) {
              for(let j=0; j<valueEevee[i].evolution_details.length; j++) {
                if(valueEevee[i].evolution_details[j].item) {
                evoChainArr.push(<p className='evo-text'>- {valueEevee[i].evolution_details[j].item.name} &#8594;</p>);
                evoChainArr.push(<p className='text-capitalize'>{valueEevee[i].species.name}</p>);
                } else if (valueEevee[i].evolution_details[j].min_happiness) {
                  if (valueEevee[i].evolution_details[j].time_of_day) {
                evoChainArr.push(<p className='evo-text'>- Level Up {valueEevee[i].evolution_details[j].time_of_day} &#8594;</p>);
                evoChainArr.push(<p className='text-capitalize'>{valueEevee[i].species.name}</p>);
                  } else {
                evoChainArr.push(<p className='evo-text'>- Level Up Friendship & Must Know {valueEevee[i].evolution_details[j].known_move_type.name} Move &#8594;</p>);
                evoChainArr.push(<p className='text-capitalize'>{valueEevee[i].species.name}</p>);
                  }
                }
                
              }
            }

          }
        }
      }
    }

  if(evoChain.chain.species.name === 'eevee') {
    traverseObjectEevee(evoChain.chain)
  } else {
    traverseObject(evoChain.chain);
  }



  return (
    <div className='d-block-flex flex-row justify-content-center a mt-2 mb-2'>
      <h6 className='text-center'>Evolution Chart</h6>
        <div className='d-flex justify-content-between flex-wrap'>
     <p className='text-capitalize' onClick={()=>traverseObject(evoChain.chain)}>{evoChain.chain.species.name}</p>
          {evoChainArr}
        </div>
     
    </div>
  )
}

export default EvoChart
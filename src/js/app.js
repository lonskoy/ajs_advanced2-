export default function destruct(obj) {
  const arrTemp = [];

  for (let i = 0; i < obj.special.length; i++) {
    if(obj.special[i].description === undefined) {
    const {id, name, description = 'Описание недоступно', icon} = obj.special[i];
    arrTemp[i] = {id, name, description,icon};
  }
  else { 
    const {id, name, description, icon} = obj.special[i];
    arrTemp[i] = {id, name, description,icon};
  }
}

 return arrTemp;
}


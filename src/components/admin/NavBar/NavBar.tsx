import React, { useEffect, useState } from 'react';
import generateTime from 'src/utils/generateTime';
import moment from 'moment';
import 'moment/locale/id'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

moment.locale('id')

interface innerProps {
  barsCallback: () => void
}

const NavBar = ({ barsCallback }: innerProps): React.ReactElement => {
  const [timestamp, setTimestamp] = useState("");
  const [hours, setHours] = useState(0);

  const getGreeting = () => {
    if (hours >= 0 && hours <= 4) {
      return <div className='flex flex-row items-center justify-end space-x-2'>
        <FontAwesomeIcon icon={'moon'} color={'#FCF55F'} />
        <p>Selamat Malam</p>
      </div>
    } else if (hours >= 5 && hours <= 11) {
      return <div>
        <FontAwesomeIcon icon={'sun'} color={'#FFAA33'} />
        <p>Selamat Pagi</p>
      </div>
    } else if (hours >= 12 && hours <= 17) {
      return <div>
        <FontAwesomeIcon icon={'sun'} color={'#FFAA33'} />
        <p>Selamat Siang</p>
      </div>
    } else if (hours >= 18 && hours < 0) {
      return <div>
        <FontAwesomeIcon icon={'moon'} color={'#FFEA00'} />
        <p>Selamat Sore</p>
      </div>
    }
  }

  useEffect(() => {
    const interval = setInterval(() => setTimestamp(() => (moment(new Date())).format('DD MMMM YYYY · HH:mm:ss')), 1000);
    const splittedInterval = timestamp.split(" ")

    if (splittedInterval[4] != undefined) {
      const splittedHours = splittedInterval[4].split(":")

      setHours(parseInt(splittedHours[0]))
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <nav className="flex flex-row bg-slate-50 w-full py-2 px-7 drop-shadow-md items-center">
    <div>
      <FontAwesomeIcon icon={'bars'} size={'lg'} onClick={() => barsCallback()} />
    </div>
    <div className="flex flex-col text-right flex-1">
      {getGreeting()}
      <p className='text-sm'>{timestamp !== "" ? timestamp : "-"}</p>
    </div>
  </nav>
}

export default NavBar
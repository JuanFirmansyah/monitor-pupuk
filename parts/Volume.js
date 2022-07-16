import React from 'react';

function Volume(props) {
  let className = [];
  const data = props.data;
  const handleClick = props.handleClick;

  let arr = data.map((obj) => obj.value);

  let red = arr.filter((value) => {
    return value > 100;
  });

  let yellow = arr.filter((value) => {
    return value >= 80 && value <= 100;
  });

  // data.map((obj) => {
  //   if (obj.value > 100) {
  //     className.push('bg-red-500');
  //   } else if (obj.value >= 80 && obj.value <= 100) {
  //     className.push('bg-yellow-500');
  //   } else {
  //     className.push('bg-white');
  //   }
  // });

  return (
    <section>
      <div className="flex gap-2 mt-16 max-w-7xl flex-wrap mx-auto">
        {data.map((volume) => (
          <button
            type="button"
            key={volume.id}
            onClick={() => handleClick(volume.value)}
            className={[
              className.join(' '),
              'block p-6 w-[16%] bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700',
            ]}
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {volume.name}
            </h5>

            <div className="flex gap-x-1">
              <p className="font-normal text-gray-700 dark:text-gray-400 mt-7">
                {volume.value}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400 mt-7">
                {volume.volume}
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

export default Volume;

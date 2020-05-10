import React from 'react'
import Part3A from './Part3A'

function Part3() {

    const matches = window.matchMedia('(min-width:1000px)').matches

    const listTopass = [
        {
            id: 1,
            src: 'https://www.wallpaperup.com/uploads/wallpapers/2015/06/21/729862/9f31ea61e49fe574242eee950e863864-1000.jpg',
            label: 'Passing',
            position: 'left',
            body: 'Enim commodo est et magna. Eiusmod incididunt eu id nulla reprehenderit consectetur aliqua enim eiusmod nulla dolore. Velit anim eiusmod nulla veniam dolore excepteur magna occaecat nisi pariatur nulla. Cupidatat veniam in eiusmod dolore est proident magna cillum ullamco labore esse duis commodo reprehenderit. Minim labore aliqua elit consequat cupidatat laboris. Sint sit magna cupidatat adipisicing aliquip amet incididunt. Consequat sint enim amet ex duis aliqua eu labore.'
        },
        {
            id: 2,
            src: 'https://www.wallpaperup.com/uploads/wallpapers/2016/05/01/940619/18de530d60d4724affb7a497b0445253-1000.jpg',
            label: 'Hero Land',
            position: 'right',
            body: 'Enim commodo est et magna. Eiusmod incididunt eu id nulla reprehenderit consectetur aliqua enim eiusmod nulla dolore. Velit anim eiusmod nulla veniam dolore excepteur magna occaecat nisi pariatur nulla. Cupidatat veniam in eiusmod dolore est proident magna cillum ullamco labore esse duis commodo reprehenderit. Minim labore aliqua elit consequat cupidatat laboris. Sint sit magna cupidatat adipisicing aliquip amet incididunt. Consequat sint enim amet ex duis aliqua eu labore.'
        },
        {
            id: 3,
            src: 'https://www.wallpaperup.com/uploads/wallpapers/2016/05/01/940765/15d3c92b159712c571c9ed9546eb6690-1000.jpg',
            label: 'Passing',
            position: 'left',
            body: 'Enim commodo est et magna. Eiusmod incididunt eu id nulla reprehenderit consectetur aliqua enim eiusmod nulla dolore. Velit anim eiusmod nulla veniam dolore excepteur magna occaecat nisi pariatur nulla. Cupidatat veniam in eiusmod dolore est proident magna cillum ullamco labore esse duis commodo reprehenderit. Minim labore aliqua elit consequat cupidatat laboris. Sint sit magna cupidatat adipisicing aliquip amet incididunt. Consequat sint enim amet ex duis aliqua eu labore.'
        },
        {
            id: 4,
            src: 'https://www.wallpaperup.com/uploads/wallpapers/2016/05/01/940568/acfea91853da05a20e9fec42e632215f-700.jpg',
            label: 'Hero Land',
            position: 'right',
            body: 'Enim commodo est et magna. Eiusmod incididunt eu id nulla reprehenderit consectetur aliqua enim eiusmod nulla dolore. Velit anim eiusmod nulla veniam dolore excepteur magna occaecat nisi pariatur nulla. Cupidatat veniam in eiusmod dolore est proident magna cillum ullamco labore esse duis commodo reprehenderit. Minim labore aliqua elit consequat cupidatat laboris. Sint sit magna cupidatat adipisicing aliquip amet incididunt. Consequat sint enim amet ex duis aliqua eu labore.'
        }
    ]

    const toShow = listTopass.map( xx => <Part3A key={xx.id} values={xx}/>)   

    return (
        <div className='mt-5' id='part3'>
            {matches &&  toShow}
        </div>
    )
}

export default Part3

import styled from 'styled-components'

export const Homestyle = styled.div`

    .site {
        max-width: 1028px;
        margin: auto;
    }

    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .art {
        max-width: 300px;
        max-height: 550px;
        border: solid #AD7A51;

        .image {
            max-width: 300;
            /* border: solid #AD7A51 2px; */

            img {
                width: 94%;
            border: solid #AD7A51 10px;

            }

        }

        .art_text {
            padding: 0.5em 0.5em;
            text-align: right;
        }
    }

`
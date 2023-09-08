import styled from 'styled-components'

export const Homestyle = styled.div`

    .site {
        max-width: 1028px;
        margin: auto;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 4em;
    }

    .headline {
        display: grid;
        grid-template-columns: 0.3fr 1fr;
        max-height: 320px;
        margin: 5em 0;
        border: solid #AD7A51;

        .headline_text {
            padding: 1em;
        }



        .img_fit {
            max-height: 300px;  
            border:solid  ;
            border: solid #AD7A51 10px;
            
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    overflow: hidden;
                }
        }


    }

    h2 {
        color: #D39D5B;
        font-size: 3em;
        font-weight: 100;
        margin: 0;
    }

    h3 {
        color: #30454C;
        font-weight: 100;
        margin: 0 0 0.5em 0;
    }

    .art {
        max-width: 300px;
        max-height: 550px;
        border: solid #AD7A51;
        margin: auto;

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

            p {
                color: #30454C;
            }
        }
    }

    .primær {
            background-color: #D39D5B;
            padding: 1em 1.5em;
            color: #fff;
            border: none;
            margin: 0 0 0 1em;
    }

    .primær:hover {
        cursor: pointer;
    }

    .tertiær {
            background-color: #30454C;
            padding: 1em 1.5em;
            color: #fff;
            border: none;
    }

    .tertiær:hover {
        cursor: pointer;
    }

    .buttonright {
        text-align: right;

        button {
            background-color: #AD7A51;
            padding: 1em 1.5em;
            margin: 2em 0 5em 0;
            color: #fff;
            border: none;
        }
        button:hover {
            cursor: pointer;
        }
    }

`
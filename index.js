require( "dotenv" ).config();

const Web = require( "webwebweb" );
Web.APIs[ "/apikey" ] = ( qs ) => {
  return {
    key: process.env.AZURE_FACE_API_KEY
  };
};
Web.Run( 1225 );

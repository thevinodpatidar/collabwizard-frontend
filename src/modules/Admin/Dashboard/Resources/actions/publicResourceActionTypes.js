
export const PUBLIC_RESOURCE = 'PUBLIC_RESOURCE';
export const PUBLIC_RESOURCE_SUCCESS = 'PUBLIC_RESOURCE_SUCCESS';
export const PUBLIC_RESOURCE_ERROR = 'PUBLIC_RESOURCE_ERROR';


export const getPublicResourceAction = token => {
    return {
      type: PUBLIC_RESOURCE,
      token
    }
  };
  
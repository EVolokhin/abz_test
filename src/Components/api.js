
// eslint-disable-next-line max-len
const USERS_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/users';

// eslint-disable-next-line max-len
const POSITIONS_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/positions';

// eslint-disable-next-line max-len
const TOKEN_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/token';

const usersOnPage = 6;

const request = async(url, options) => {
  const result = await fetch(`${url}`, options);

  if (!result.ok) {
    // console.log(result.json());
    throw new Error(`${result.status} - request error!!`);
  }

  return result.json();
};

export const requestUsers = async(page) => {
  try {
    // eslint-disable-next-line max-len
    const result = await request(`${USERS_URL}?page=${page}&count=${usersOnPage}`);

    return result;
  } catch (error) {
    // console.log(`Users request fail`);
    // console.log(error);

    return error;
  }
};

export const requestPositions = async() => {
  const result = await fetch(`${POSITIONS_URL}`);

  if (!result.ok) {
    throw new Error(`${result.status} - request Positions Failed`);
  }

  return result.json();
};

const requestToken = async() => {
  try {
    const result = await request(`${TOKEN_URL}`);

    return result;
  } catch (error) {
    // console.log('Token request fail');
    // console.log(error);

    return error;
  }
};

export const postSignupForm = async(values, setUsers) => {
  try {
    // console.log('posting form'); // delete when done
    // console.log(values);                     // delete when done

    const formData = new FormData();
    const fileField = document.querySelector('input[type="file"]');

    // file from input type='file'
    formData.append('position_id', `${values.position}`);
    formData.append('name', `${values.name}`);
    formData.append('email', `${values.email}`);
    formData.append('phone', `${values.phone}`);
    formData.append('photo', fileField.files[0]);

    // console.log(formData.getAll('position_id')); // delete when done

    const result = await requestToken();

    const { token } = result;

    // console.log(token);

    const postForm = await request(`${USERS_URL}`, {
      method: 'POST',
      body: formData,
      headers: {
        Token: `${token}`,
      },
    });

    const userId = postForm.user_id;
    // console.log(postForm.user_id);

    const fetchNewUser = async(setUsersList) => {
      const response = await request(`${USERS_URL}/${userId}`);
      const data = response.user;

      // console.log(data);
      // console.log('seting new user...');
      setUsersList(prev => [data, ...prev]);
    };

    fetchNewUser(setUsers);

    return postForm.json();
  } catch (error) {
    // console.log('SignupForm post error');
    // console.log(error);

    return error;
  }
};

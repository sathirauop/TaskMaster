// src/hooks/useAuth.js
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { setAuthenticated, setUser, setAuthError, logout } from '../features/auth/authSlice';
import { loginUser, registerUser, getCurrentUser, refreshToken } from '../api/authApi';


export function useLogin() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: loginUser,
    onSuccess: function(data){
      // Update Redux auth state
      dispatch(setAuthenticated(true));
      dispatch(setUser(data.user));

      console.log(`on succsess on useLogin hook`);
      
      // Store token in localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      
      // Invalidate and refetch any user-dependent queries
      queryClient.invalidateQueries({ queryKey: ['user'] });

    },
    onError: (error) => {
      dispatch(setAuthError(error?.message || 'Login failed'));
    },
  });
}

 export function useRegister() {
    const dispatch =  useDispatch();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: registerUser,
        onSuccess: (data)=>{
            dispatch(setAuthenticated(true));
            dispatch(setUser(data.user));
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            queryClient.invalidateQueries('user');
        },
        onError: (error)=>{
            dispatch(setAuthError(error.response?.message || 'Registration failed'));
        }
    });
 } 

 export function useLogout() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  
  return () => {
    console.log("logout")
    // Dispatch the logout action to update Redux state
    dispatch(logout());
    
    // In v5, 'clear()' is replaced with 'removeQueries()'
    // This removes all queries from the cache
    queryClient.removeQueries();
    
    // Optionally, you might want to reset the query client entirely
    queryClient.resetQueries();
  };
}

 export function useCurrentUser() {
  const dispatch = useDispatch();

  return useQuery({
    queryKey: ['currentUser'],  // Query keys should be in array format
    queryFn: getCurrentUser,
    enabled: !!localStorage.getItem('token'),
    onError: (error) => {
      // If getting current user fails (token expired, etc.), log the user out
      if (error.response?.status === 401) {
        dispatch(logout());
      }
    }
  });
}

 export function useRefreshToken() {
    const dispatch = useDispatch();
    
    return useMutation(refreshToken, {
      onSuccess: (data) => {
        localStorage.setItem('token', data.token);
        // Don't need to update user info or auth status as they haven't changed
      },
      onError: () => {
        // If refresh fails, log the user out
        dispatch(logout());
      },
    });
  }
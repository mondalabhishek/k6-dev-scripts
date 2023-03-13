import { group, check } from 'k6';
import http from 'k6/http';

const id = 5;

export default function () {
  group('Get post', function () {
    http.get(`http://example.com/posts/${id}`);
  });
  group('List post', function () {
    const res = http.get(`http://example.com/posts`);
    check(res, {
      'is status 200': (r) => r.status === 200,
    });
  });
  
}

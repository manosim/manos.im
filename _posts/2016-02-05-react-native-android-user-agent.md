---
layout: post
title: React Native & Android, Overriding the User-Agent
cover: react-native-android-user-agent.png
---

Whilst rewriting Trevor - one of side projects - from [Ionic Framework][ionic-url] to [React Native][react-native-url] I came to a point where I had to set the **User-Agent**. Trevor uses the [Travis CI][travis-url] Web API and its public version (.com) requires setting the User-Agent to a registered-whitelisted one.

...

<!--more-->

    # CustomInterceptor.java
    package com.trevor;

    import com.squareup.okhttp.Interceptor;
    import com.squareup.okhttp.Request;
    import com.squareup.okhttp.Response;

    import java.io.IOException;

    public class CustomInterceptor implements Interceptor {

        public CustomInterceptor() {}

        @Override
        public Response intercept(Interceptor.Chain chain) throws IOException {
            Request originalRequest = chain.request();
            Request requestWithUserAgent = originalRequest.newBuilder()
                .removeHeader("User-Agent")
                .addHeader("User-Agent", "Trevor")
                .build();

            return chain.proceed(requestWithUserAgent);
        }

    }

...

    # MainActivity.java
    ...
    import com.facebook.react.modules.network.OkHttpClientProvider;
    import com.squareup.okhttp.OkHttpClient;
    ...

    public class MainActivity extends ReactActivity {
        @Override
        public void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            attachInterceptor();
        }

        private void attachInterceptor() {
            OkHttpClient client = OkHttpClientProvider.getOkHttpClient();
            client.networkInterceptors().add(new CustomInterceptor());
        }
    }


...

[ionic-url]: http://ionicframework.com/
[react-native-url]: https://facebook.github.io/react-native/
[travis-url]: https://travis-ci.org/

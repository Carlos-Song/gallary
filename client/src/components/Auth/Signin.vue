<template>
    <v-container text-xs-center ms-5 mt-5 pt-5>
        <!-- 登陆 -->
        <v-layout row wrap>
            <v-flex x12 sm6 offset-sm3>
                <h1>欢迎回来!</h1>
            </v-flex>
        </v-layout>

    <!-- 登录表单 -->
    <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3>
            <v-card color="secondary" dark>
                <v-container>
                    <v-form @submit.prevent="handleSigninUser">

                        <v-layout row>
                            <v-flex xs12>
                                <v-text-field v-model="username" prepend-icon="face" label="Username" 
                                type="text" required></v-text-field>
                            </v-flex>
                        </v-layout>

                        <v-layout row>
                            <v-flex xs12>
                                <v-text-field v-model="password" prepend-icon="extension" label="Password" 
                                type="password" required></v-text-field>
                            </v-flex>
                        </v-layout>

                        <v-layout row>
                            <v-flex xs12>
                                <v-btn color="accent" type="submit">登录</v-btn>
                                <h3>还没有账号？
                                    <router-link to="/signup">注册</router-link>
                                </h3>
                            </v-flex>
                        </v-layout>
            

                    </v-form>
                </v-container>
            </v-card>
        </v-flex>
    </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Signin',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        handleSigninUser() {
            this.$store.dispatch('signinUser', {
                username: this.username,
                password: this.password
            });
        }
    }
}
</script>

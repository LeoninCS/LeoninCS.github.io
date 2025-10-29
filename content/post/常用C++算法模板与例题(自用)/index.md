---
author: "LeoninCS"

title: "常用C++算法模板与例题(偏自用)"

date: "2025-10-29"

description: "一些常用的C++算法模板与例题(自用)，为ICPC区域赛准备。"

categories:
- "算法模板"
- "ACM"
- "ICPC区域赛"
tags:
- "算法模板"
- "ACM"
- "ICPC区域赛"
image: "face.png"
---

# 常用C++算法模板与例题(偏自用)

> 该博客准备了一些常用的C++算法模板与相应的例题，采用class的格式(偏自用)，为ICPC区域赛而准备。

## 基础模板

```c++
#include <bits/stdc++.h>
using namespace std;
using i64 = long long;
using pii = pair<int,int>;
using pll = pair<i64,i64>;

void solve()
{
}

int main()
{

    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int T = 1;
    //cin >> T;
    while(T--) {
        solve();
    }

    return 0;
}
```



## 快速幂

### 模板

```C++
// 复杂度：O(log2(b))
#include<bits/stdc++.h>
using namespace std;
using i64 = long long;

i64 qmi(i64 a, i64 b, i64 mod) {
    i64 res = 1;
    while(b) {
        if(b & 1) res = (res * a) % mod;
        a = (a * a) % mod;
        b >>= 1;
    }
    return res;
}
```

### 例题

[【模板】快速幂 - 洛谷](https://www.luogu.com.cn/problem/P1226)

```C++
#include <bits/stdc++.h>
using namespace std;
using i64 = long long;
using pii = pair<int,int>;
using pll = pair<i64,i64>;
// ----------------------------------------------------------------------------------------------
//快速幂
i64 qmi(i64 a, i64 b, i64 mod) {
    i64 res = 1;
    while(b) {
        if(b & 1) res = (res * a) % mod;
        a = (a * a) % mod;
        b >>= 1;
    }
    return res;
}
// ----------------------------------------------------------------------------------------------
void solve()
{
    i64 a, b, mod;
    cin >> a >> b >> mod;
    i64 ans = qmi(a, b, mod);
    cout << a << "^" << b << " mod " << mod << "=" << ans << "\n";
}

int main()
{

    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int T = 1;
    //cin >> T;
    while(T--) {
        solve();
    }

    return 0;
}

```

## 逆元

### 模板

#### 快速幂+费马小定理（要求mod为质数）

```C++
// 复杂度：O(log2(mod))
#include<bits/stdc++.h>
using namespace std;
using i64 = long long;
i64 mod = 1e9 + 7;
//快速幂
i64 qmi(i64 a, i64 b) {
    i64 res = 1;
    while(b) {
        if(b & 1) res = (res * a) % mod;
        a = (a * a) % mod;
        b >>= 1;
    }
    return res;
}
//费马小定理
i64 inv(i64 a) {
    return qmi(a, mod - 2);
}

```

#### 线性推（要求mod为质数）

```c++
// 复杂度：O(n)
#include<bits/stdc++.h>
using namespace std;
using i64 = long long;
i64 mod = 1e9 + 7;

vector<i64> init(int n) {
    vector<i64> inv(n + 1, 0);
    inv[1] = 1;
    for (int i = 2; i <= n; ++i)
        inv[i] = (i64)(mod - mod / i) * inv[mod % i] % mod;
    return inv;
}
```

#### 扩展欧拉定理（mod可以不为质数）

```c++
#include <bits/stdc++.h>
using namespace std;
using i64 = long long;
using u64 = unsigned long long;
using i128 = __int128_t;

// 快速幂 (a^e % mod)，支持 64 位乘法防溢出
static inline i64 mul_mod(i64 a, i64 b, i64 mod) {
    return (i64)((i128)a * b % mod);
}
static inline i64 pow_mod(i64 a, i64 e, i64 mod) {
    a %= mod; if (a < 0) a += mod;
    i64 r = 1 % mod;
    while (e > 0) {
        if (e & 1) r = mul_mod(r, a, mod);
        a = mul_mod(a, a, mod);
        e >>= 1;
    }
    return r;
}

// 试除法求 phi(m)（适合中等 m；很大 m 可换分解或线筛预处理）
i64 phi(i64 m) {
    i64 r = m, x = m;
    for (i64 p = 2; p * p <= x; ++p) {
        if (x % p == 0) {
            while (x % p == 0) x /= p;
            r = r / p * (p - 1);
        }
    }
    if (x > 1) r = r / x * (x - 1);
    return r;
}

// 扩展欧拉定理：计算 a^b mod m
i64 mod_pow_ext_euler(i64 a, i64 b, i64 m) {
    if (m == 1) return 0;
    a %= m; if (a < 0) a += m;

    i64 g = std::gcd((i64)llabs(a), (i64)llabs(m));
    i64 t = phi(m);

    i64 e;
    if (g == 1) {
        // 互质，直接降幂到 φ(m)
        e = (t == 0 ? 0 : (b % t + t) % t);
    } else {
        // 不互质：b < φ 用 b；否则用 (b % φ + φ)
        if (b < t) e = b;
        else       e = (t == 0 ? b : (b % t + t));
    }
    return pow_mod(a, e, m);
}

```



### 例题

[【模板】模意义下的乘法逆元 - 洛谷](https://www.luogu.com.cn/problem/P3811)

```c++
#include <bits/stdc++.h>
using namespace std;
using i64 = long long;
using pii = pair<int,int>;
using pll = pair<i64,i64>;
i64 mod = 1e9 + 7;

// ----------------------------------------------------------------------------------------------
// inv[i] = i^{-1} mod p，要求 p 为素数、n < p
vector<i64> init(int n) {
    vector<i64> inv(n + 1, 0);
    inv[1] = 1;
    for (int i = 2; i <= n; ++i)
        inv[i] = (i64)(mod - mod / i) * inv[mod % i] % mod;
    return inv;
}
// ----------------------------------------------------------------------------------------------
void solve()
{
    int n;
    cin >> n >> mod;
    vector<i64> ans = init(n);
    for(int i = 1; i <= n; i++) {
        cout << ans[i] << "\n";
    }
}

int main()
{

    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int T = 1;
    //cin >> T;
    while(T--) {
        solve();
    }

    return 0;
}

```

## 筛质数

### 模板

#### 埃氏筛

```C++
// 复杂度：O(n log log n)，适合一次性筛到 n
#include <bits/stdc++.h>
using namespace std;
using i64 = long long;

vector<int> primes;
vector<bool> is_prime;

void sieve(int n) {
    is_prime.assign(n + 1, true);
    if(n >= 0) is_prime[0] = false;
    if(n >= 1) is_prime[1] = false;
    for(int i = 2; i * 1LL * i <= n; ++i) {
        if (is_prime[i]) {
            for (i64 j = 1LL * i * i; j <= n; j += i) is_prime[j] = false;
        }
    }
    primes.clear();
    for(int i = 2; i <= n; ++i) {
        if(is_prime[i]) primes.push_back(i);
    } 
}
```

#### 线性筛

```C++
// 复杂度：O(n)
#include <bits/stdc++.h>
using namespace std;
using i64 = long long;

vector<int> primes;
vector<bool> is_prime;

void sieve(int n) {
    is_prime.assign(n + 1, true);
    if(n >= 0) is_prime[0] = false;
    if(n >= 1) is_prime[1] = false;
    for(int i = 2; i <= n; i++) {
        if(is_prime[i]) primes.push_back(i);
        for(int p : primes) {
            if(i * p > n) break;
            is_prime[i * p] = false;
            if(i % p == 0) break;
        }
    } 
}

```

### 例题

[【模板】线性筛素数 - 洛谷](https://www.luogu.com.cn/problem/P3383)

```c++
#include <bits/stdc++.h>
using namespace std;
using i64 = long long;
using pii = pair<int,int>;
using pll = pair<i64,i64>;
i64 mod = 1e9 + 7;

// ----------------------------------------------------------------------------------------------
vector<int> primes;
vector<bool> is_prime;

void sieve(int n) {
    is_prime.assign(n + 1, true);
    if(n >= 0) is_prime[0] = false;
    if(n >= 1) is_prime[1] = false;
    for(int i = 2; i <= n; i++) {
        if(is_prime[i]) primes.push_back(i);
        for(int p : primes) {
            if(i * p > n) break;
            is_prime[i * p] = false;
            if(i % p == 0) break;
        }
    } 
}
// ----------------------------------------------------------------------------------------------
void solve()
{
    int n, m;
    cin >> n >> m;
    sieve(n);
    while(m--) {
        int x;
        cin >> x;
        x--;
        cout << primes[x] << "\n";
    }
}

int main()
{

    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int T = 1;
    //cin >> T;
    while(T--) {
        solve();
    }

    return 0;
}

```

## ST表

### 模板

```C++
//预处理复杂度：O(nlogn)
//查询复杂度：O(1)
#include <bits/stdc++.h>
using namespace std;

template<class T>
class ST {
public:
    ST() : n(0), K(0) {}
    ST(const vector<T>& a) { build(a); }

    void build(const vector<T>& a) {
        n = (int)a.size();
        K = n ? (32 - __builtin_clz(n)) : 1;

        lg.assign(n + 1, 0);
        for (int i = 2; i <= n; ++i) lg[i] = lg[i >> 1] + 1;

        mn.assign(K, vector<T>(n));
        mx.assign(K, vector<T>(n));
        if (n == 0) return;

        mn[0] = a;
        mx[0] = a;
        for (int k = 1; k < K; ++k) {
            int len = 1 << k, half = len >> 1;
            for (int i = 0; i + len <= n; ++i) {
                mn[k][i] = std::min(mn[k-1][i], mn[k-1][i + half]);
                mx[k][i] = std::max(mx[k-1][i], mx[k-1][i + half]);
            }
        }
    }

    // 闭区间最小值 [l, r]
    T queryMin(int l, int r) const {
        int k = lg[r - l + 1];
        return std::min(mn[k][l], mn[k][r - (1 << k) + 1]);
    }

    // 闭区间最大值 [l, r]
    T queryMax(int l, int r) const {
        int k = lg[r - l + 1];
        return std::max(mx[k][l], mx[k][r - (1 << k) + 1]);
    }

private:
    int n, K;
    vector<int> lg;
    vector<vector<T>> mn, mx;
};

```

### 例题

[【模板】ST 表 & RMQ 问题 - 洛谷](https://www.luogu.com.cn/problem/P3865)

```C++
#include <bits/stdc++.h>
using namespace std;
using i64 = long long;
using pii = pair<int,int>;
using pll = pair<i64,i64>;
i64 mod = 1e9 + 7;

// ----------------------------------------------------------------------------------------------
template<class T>
class ST {
public:
    ST() : n(0), K(0) {}
    ST(const vector<T>& a) { build(a); }

    void build(const vector<T>& a) {
        n = (int)a.size();
        K = n ? (32 - __builtin_clz(n)) : 1;

        lg.assign(n + 1, 0);
        for (int i = 2; i <= n; ++i) lg[i] = lg[i >> 1] + 1;

        mn.assign(K, vector<T>(n));
        mx.assign(K, vector<T>(n));
        if (n == 0) return;

        mn[0] = a;
        mx[0] = a;
        for (int k = 1; k < K; ++k) {
            int len = 1 << k, half = len >> 1;
            for (int i = 0; i + len <= n; ++i) {
                mn[k][i] = std::min(mn[k-1][i], mn[k-1][i + half]);
                mx[k][i] = std::max(mx[k-1][i], mx[k-1][i + half]);
            }
        }
    }

    // 闭区间最小值 [l, r]
    T queryMin(int l, int r) const {
        int k = lg[r - l + 1];
        return std::min(mn[k][l], mn[k][r - (1 << k) + 1]);
    }

    // 闭区间最大值 [l, r]
    T queryMax(int l, int r) const {
        int k = lg[r - l + 1];
        return std::max(mx[k][l], mx[k][r - (1 << k) + 1]);
    }

private:
    int n, K;
    vector<int> lg;
    vector<vector<T>> mn, mx;
};
// ----------------------------------------------------------------------------------------------
void solve()
{
    int n, m;
    cin >> n >> m;
    vector<int> a(n);
    for (int i = 0; i < n; ++i) cin >> a[i];
    ST<int> st(a);
    while(m--) {
        int l, r;
        cin >> l >> r;
        l--, r--;
        cout << st.queryMax(l, r) << "\n";
    }
}

int main()
{

    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int T = 1;
    //cin >> T;
    while(T--) {
        solve();
    }

    return 0;
}

```



## 并查集(0-based)

### 模板

```c++
// DSU (路径压缩)
// 复杂度：O(n)
#include <bits/stdc++.h>
using namespace std;

class DSU {
public:
    DSU(int n) { init(n); }

    void init(int n) {
        par.resize(n);
        iota(par.begin(), par.end(), 0);
    }

    int find(int x) {
        if (par[x] == x) return x;
        return par[x] = find(par[x]); // 路径压缩
    }

    void merge(int a, int b) {
        a = find(a); b = find(b);
        if(a > b) swap(a, b);
        par[b] = a;
    }

    bool same(int a, int b) { return find(a) == find(b); }

    int size(int x) {
        int sz = 0;
        for(int i = 0; i < par.size(); i++){
            if(find(i) == x) sz++;
        }
        return sz;
    }

private:
    vector<int> par;
};

```

### 例题

[【模板】并查集 - 洛谷](https://www.luogu.com.cn/problem/P3367) 

```C++
#include <bits/stdc++.h>
using namespace std;
using i64 = long long;
using pii = pair<int,int>;
using pll = pair<i64,i64>;
// ----------------------------------------------------------------------------------------------
class DSU {
public:
    DSU(int n) { init(n); }

    void init(int n) {
        par.resize(n);
        iota(par.begin(), par.end(), 0);
    }

    int find(int x) {
        if (par[x] == x) return x;
        return par[x] = find(par[x]); // 路径压缩
    }

    void merge(int a, int b) {
        a = find(a); b = find(b);
        if(a > b) swap(a, b);
        par[b] = a;
    }

    bool same(int a, int b) { return find(a) == find(b); }

    int size() {
        int sz = 0;
        for(int i = 0; i < par.size(); i++){
            if(find(i) == i) sz++;
        }
        return sz;
    }

private:
    vector<int> par;
};
// ----------------------------------------------------------------------------------------------
void solve()
{
    int n, m;
    cin >> n >> m;
    DSU dsu(n);
    while (m--) {
        int choice, a, b;
        cin >> choice >> a >> b;
        a--, b--;
        if (choice == 1) {
            dsu.merge(a, b);
        } else {
            cout << (dsu.same(a, b) ? "Y" : "N") << endl;
        }
    }
}

int main()
{

    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int T = 1;
    //cin >> T;
    while(T--) {
        solve();
    }

    return 0;
}
```

## 字典树

### 模板

#### a-z版

```c++
//复杂度：O(n)
#include <bits/stdc++.h>
using namespace std;

class Trie {
    static constexpr int ALPHA = 26;
    static constexpr char BASE = 'a';
    struct Node {
        array<int, ALPHA> next;
        int pass = 0, end = 0;
        Node() { next.fill(-1); }
    };
    vector<Node> t;
public:
    Trie() { t.emplace_back(); }

    void insert(string_view s) {
        int u = 0; t[u].pass++;
        for (char ch : s) {
            int c = ch - BASE;
            // 如果保证输入是 a-z，可以删掉以下两行检查
            if (c < 0 || c >= ALPHA) continue;
            if (t[u].next[c] == -1) { t[u].next[c] = (int)t.size(); t.emplace_back(); }
            u = t[u].next[c];
            t[u].pass++;
        }
        t[u].end++;
    }

    bool contains(string_view s) const {
        int u = findNode(s);
        return u != -1 && t[u].end > 0;
    }
    bool startsWith(string_view s) const {
        int u = findNode(s);
        return u != -1 && t[u].pass > 0;
    }
    int countPrefix(string_view s) const {
        int u = findNode(s);
        return u == -1 ? 0 : t[u].pass;
    }
    int countExact(string_view s) const { // 原 countWordsWithPrefix 更名
        int u = findNode(s);
        return u == -1 ? 0 : t[u].end;
    }
    void erase(string_view s) {
        if (!contains(s)) return;
        int u = 0; t[u].pass--;
        for (char ch : s) {
            int c = ch - BASE;
            if (c < 0 || c >= ALPHA) continue;
            u = t[u].next[c];
            t[u].pass--;
        }
        t[u].end--;
    }
private:
    int findNode(string_view s) const {
        int u = 0;
        for (char ch : s) {
            int c = ch - BASE;
            if (c < 0 || c >= ALPHA) return -1;
            int v = t[u].next[c];
            if (v == -1) return -1;
            u = v;
        }
        return u;
    }
};

```

#### ASCII版

```c++
// 稀疏版 Trie：7-bit ASCII，避免 MLE
#include <bits/stdc++.h>
using namespace std;

class Trie {
    struct Node {
        unordered_map<unsigned char, int> next; // 只存实际存在的子边
        int pass = 0, end = 0;
    };
    vector<Node> t;

    static inline int idx(unsigned char ch) {
        return (ch < 128) ? int(ch) : -1; // 7-bit ASCII
    }

public:
    Trie() { 
        t.reserve(1 << 20); // 可按数据量调整（可选）
        t.emplace_back();
    }

    void insert(string_view s) {
        int u = 0; t[u].pass++;
        for (char ch : s) {
            int c = idx(static_cast<unsigned char>(ch));
            if (c == -1) continue; // 忽略非 ASCII
            auto it = t[u].next.find((unsigned char)c);
            if (it == t[u].next.end()) {
                int v = (int)t.size();
                t[u].next[(unsigned char)c] = v;
                t.emplace_back();
                u = v;
            } else {
                u = it->second;
            }
            t[u].pass++;
        }
        t[u].end++;
    }

    bool contains(string_view s) const {
        int u = findNode(s);
        return u != -1 && t[u].end > 0;
    }

    bool startsWith(string_view s) const {
        int u = findNode(s);
        return u != -1 && t[u].pass > 0;
    }

    int countPrefix(string_view s) const {
        int u = findNode(s);
        return u == -1 ? 0 : t[u].pass;
    }

    int countExact(string_view s) const {
        int u = findNode(s);
        return u == -1 ? 0 : t[u].end;
    }

    void erase(string_view s) {
        if (!contains(s)) return;
        int u = 0; t[u].pass--;
        for (char ch : s) {
            int c = idx(static_cast<unsigned char>(ch));
            if (c == -1) continue;
            u = t[u].next.at((unsigned char)c);
            t[u].pass--;
        }
        t[u].end--;
        // 注：未做物理回收，通常不必；若需要可做懒惰删除标记或GC
    }

private:
    int findNode(string_view s) const {
        int u = 0;
        for (char ch : s) {
            int c = idx(static_cast<unsigned char>(ch));
            if (c == -1) return -1;
            auto it = t[u].next.find((unsigned char)c);
            if (it == t[u].next.end()) return -1;
            u = it->second;
        }
        return u;
    }
};

```



### 例题

[【模板】字典树 - 洛谷](https://www.luogu.com.cn/problem/P8306)

```c++
#include <bits/stdc++.h>
using namespace std;
using i64 = long long;
using pii = pair<int,int>;
using pll = pair<i64,i64>;
// ----------------------------------------------------------------------------------------------
// 稀疏版 Trie：7-bit ASCII，避免 MLE
class Trie {
    struct Node {
        unordered_map<unsigned char, int> next; // 只存实际存在的子边
        int pass = 0, end = 0;
    };
    vector<Node> t;

    static inline int idx(unsigned char ch) {
        return (ch < 128) ? int(ch) : -1; // 7-bit ASCII
    }

public:
    Trie() { 
        t.reserve(1 << 20); // 可按数据量调整（可选）
        t.emplace_back();
    }

    void insert(string_view s) {
        int u = 0; t[u].pass++;
        for (char ch : s) {
            int c = idx(static_cast<unsigned char>(ch));
            if (c == -1) continue; // 忽略非 ASCII
            auto it = t[u].next.find((unsigned char)c);
            if (it == t[u].next.end()) {
                int v = (int)t.size();
                t[u].next[(unsigned char)c] = v;
                t.emplace_back();
                u = v;
            } else {
                u = it->second;
            }
            t[u].pass++;
        }
        t[u].end++;
    }

    bool contains(string_view s) const {
        int u = findNode(s);
        return u != -1 && t[u].end > 0;
    }

    bool startsWith(string_view s) const {
        int u = findNode(s);
        return u != -1 && t[u].pass > 0;
    }

    int countPrefix(string_view s) const {
        int u = findNode(s);
        return u == -1 ? 0 : t[u].pass;
    }

    int countExact(string_view s) const {
        int u = findNode(s);
        return u == -1 ? 0 : t[u].end;
    }

    void erase(string_view s) {
        if (!contains(s)) return;
        int u = 0; t[u].pass--;
        for (char ch : s) {
            int c = idx(static_cast<unsigned char>(ch));
            if (c == -1) continue;
            u = t[u].next.at((unsigned char)c);
            t[u].pass--;
        }
        t[u].end--;
        // 注：未做物理回收，通常不必；若需要可做懒惰删除标记或GC
    }

private:
    int findNode(string_view s) const {
        int u = 0;
        for (char ch : s) {
            int c = idx(static_cast<unsigned char>(ch));
            if (c == -1) return -1;
            auto it = t[u].next.find((unsigned char)c);
            if (it == t[u].next.end()) return -1;
            u = it->second;
        }
        return u;
    }
};

// ----------------------------------------------------------------------------------------------
void solve()
{
    int n, m;
    cin >> n >> m;
    Trie t;
    for(int i = 0; i < n; i++){
        string s;
        cin >> s;
        t.insert(s);
    }
    for(int i = 0; i < m; i++){
        string s;
        cin >> s;
        cout << t.countPrefix(s) << "\n";
    }
}

int main()
{
    
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int T = 1;
    cin >> T;
    while(T--) {
        solve();
    }

    return 0;
}

```

## 树状数组(0-based)

### 模板

#### 点更新+区间求和

``` c++
#include <bits/stdc++.h>
using namespace std;

class Fenwick {
public:
    Fenwick(): n(0) {}
    explicit Fenwick(int n_) { init(n_); }
    explicit Fenwick(const vector<long long>& a) { build(a); }

    void init(int n_) {
        n = n_;
        bit.assign(n, 0);
    }

    void build(const vector<long long>& a) {
        n = (int)a.size();
        bit = a;
        for (int i = 0; i < n; ++i) {
            int j = i | (i + 1);
            if (j < n) bit[j] += bit[i];
        }
    }

    void add(int i, long long delta) {
        for (; i < n; i = i | (i + 1)) bit[i] += delta;
    }

    // 前缀和：A[0] + ... + A[i]，若 i < 0 返回 0
    long long sumPrefix(int i) const {
        if (i < 0) return 0;
        long long res = 0;
        for (; i >= 0; i = (i & (i + 1)) - 1) res += bit[i];
        return res;
    }

    // 区间和：A[l] + ... + A[r]（要求 0<=l<=r<n）
    long long sumRange(int l, int r) const {
        if (l > r) return 0;
        return sumPrefix(r) - sumPrefix(l - 1);
    }

    int size() const { return n; }

private:
    int n;
    vector<long long> bit;
};

```

#### 区间更新+区间求和

``` c++
#include <bits/stdc++.h>
using namespace std;

class Fenwick {
public:
    Fenwick() : n(0) {}
    explicit Fenwick(int n_) { init(n_); }
    explicit Fenwick(const vector<long long>& a) { build(a); }

    void init(int n_) {
        n = n_;
        bit1.assign(n + 2, 0);
        bit2.assign(n + 2, 0);
    }

    // 从数组构建（0-based）。如需 O(n) 构建可改成差分构建，这里用简洁的 O(n log n) 版本。
    void build(const vector<long long>& a) {
        init((int)a.size());
        for (int i = 0; i < n; ++i) addRange(i, i, a[i]);
    }

    // 区间加：A[l..r] += delta
    void addRange(int l, int r, long long delta) {
        // 将 0-based 转为 1-based
        int L = l + 1, R = r + 1;
        internalAdd(bit1, L, +delta);
        internalAdd(bit1, R + 1, -delta);
        internalAdd(bit2, L, +delta * (L - 1));
        internalAdd(bit2, R + 1, -delta * R);
    }

    // 前缀和：sum A[0..i]；若 i < 0 返回 0
    long long sumPrefix(int i) const {
        if (i < 0) return 0;
        int x = i + 1; // 1-based
        return x * internalSum(bit1, x) - internalSum(bit2, x);
    }

    // 区间和：sum A[l..r]
    long long sumRange(int l, int r) const {
        if (l > r) return 0;
        return sumPrefix(r) - sumPrefix(l - 1);
    }

    int size() const { return n; }

private:
    int n;
    vector<long long> bit1, bit2; // 双树

    static void internalAdd(vector<long long>& bit, int idx, long long delta) {
        for (int i = idx; i < (int)bit.size(); i += i & -i) bit[i] += delta;
    }
    static long long internalSum(const vector<long long>& bit, int idx) {
        long long res = 0;
        for (int i = idx; i > 0; i -= i & -i) res += bit[i];
        return res;
    }
};


```

### 例题

#### [【模板】树状数组 1 - 洛谷](https://www.luogu.com.cn/problem/P3374)

``` c++
#include <bits/stdc++.h>
using namespace std;
using i64 = long long;
using pii = pair<int,int>;
using pll = pair<i64,i64>;
// ----------------------------------------------------------------------------------------------
class Fenwick {
public:
    Fenwick(): n(0) {}
    explicit Fenwick(int n_) { init(n_); }
    explicit Fenwick(const vector<long long>& a) { build(a); }

    void init(int n_) {
        n = n_;
        bit.assign(n, 0);
    }

    void build(const vector<long long>& a) {
        n = (int)a.size();
        bit = a;
        for (int i = 0; i < n; ++i) {
            int j = i | (i + 1);
            if (j < n) bit[j] += bit[i];
        }
    }

    void add(int i, long long delta) {
        for (; i < n; i = i | (i + 1)) bit[i] += delta;
    }

    // 前缀和：A[0] + ... + A[i]，若 i < 0 返回 0
    long long sumPrefix(int i) const {
        if (i < 0) return 0;
        long long res = 0;
        for (; i >= 0; i = (i & (i + 1)) - 1) res += bit[i];
        return res;
    }

    // 区间和：A[l] + ... + A[r]（要求 0<=l<=r<n）
    long long sumRange(int l, int r) const {
        if (l > r) return 0;
        return sumPrefix(r) - sumPrefix(l - 1);
    }

    int size() const { return n; }

private:
    int n;
    vector<long long> bit;
};
// ----------------------------------------------------------------------------------------------
void solve()
{
    int n, m;
    cin >> n >> m;
    vector<i64> a(n);
    for (int i = 0; i < n; ++i) cin >> a[i];
    Fenwick fen(a);
    while(m--) {
        int choose;
        cin >> choose;
        if(choose == 1) {
            int idx, val;
            cin >> idx >> val;
            idx--;
            fen.add(idx, val);
        } else {
            int l, r;
            cin >> l >> r;
            l--, r--;
            cout << fen.sumRange(l, r) << "\n";
        }
    }
}

int main()
{
    
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int T = 1;
    //cin >> T;
    while(T--) {
        solve();
    }

    return 0;
}

```



#### [【模板】树状数组 2 - 洛谷](https://www.luogu.com.cn/problem/P3368)

``` c++
#include <bits/stdc++.h>
using namespace std;
using i64 = long long;
using pii = pair<int,int>;
using pll = pair<i64,i64>;
// ----------------------------------------------------------------------------------------------
class Fenwick {
public:
    Fenwick() : n(0) {}
    explicit Fenwick(int n_) { init(n_); }
    explicit Fenwick(const vector<long long>& a) { build(a); }

    void init(int n_) {
        n = n_;
        bit1.assign(n + 2, 0);
        bit2.assign(n + 2, 0);
    }

    void build(const vector<long long>& a) {
        init((int)a.size());
        for (int i = 0; i < n; ++i) addRange(i, i, a[i]);
    }

    // 区间加：A[l..r] += delta
    void addRange(int l, int r, long long delta) {
        // 将 0-based 转为 1-based
        int L = l + 1, R = r + 1;
        internalAdd(bit1, L, +delta);
        internalAdd(bit1, R + 1, -delta);
        internalAdd(bit2, L, +delta * (L - 1));
        internalAdd(bit2, R + 1, -delta * R);
    }

    // 前缀和：sum A[0..i]；若 i < 0 返回 0
    long long sumPrefix(int i) const {
        if (i < 0) return 0;
        int x = i + 1; // 1-based
        return x * internalSum(bit1, x) - internalSum(bit2, x);
    }

    // 区间和：sum A[l..r]
    long long sumRange(int l, int r) const {
        if (l > r) return 0;
        return sumPrefix(r) - sumPrefix(l - 1);
    }

    int size() const { return n; }

private:
    int n;
    vector<long long> bit1, bit2; // 双树

    static void internalAdd(vector<long long>& bit, int idx, long long delta) {
        for (int i = idx; i < (int)bit.size(); i += i & -i) bit[i] += delta;
    }
    static long long internalSum(const vector<long long>& bit, int idx) {
        long long res = 0;
        for (int i = idx; i > 0; i -= i & -i) res += bit[i];
        return res;
    }
};
// ----------------------------------------------------------------------------------------------
void solve()
{
    int n, m;
    cin >> n >> m;
    vector<i64> a(n);
    for (int i = 0; i < n; ++i) cin >> a[i];
    Fenwick fen(a);
    while(m--) {
        int choose;
        cin >> choose;
        if(choose == 1) {
            int l, r, val;
            cin >> l >> r >> val;
            l--, r--;
            fen.addRange(l, r, val);
        } else {
            int idx;
            cin >> idx;
            idx--;
            cout << fen.sumRange(idx, idx) << "\n";
        }
    }
}

int main()
{
    
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int T = 1;
    //cin >> T;
    while(T--) {
        solve();
    }

    return 0;
}

```



## 最近公共祖先

### 模板

```C++
#include <bits/stdc++.h>
using namespace std;

class LCA {
public:
    LCA(int n = 0) { init(n); }

    void init(int n_) {
        n = n_;
        LOG = (n <= 1 ? 1 : 32 - __builtin_clz(n));
        g.assign(n, {});
        depth.assign(n, 0);
        tin.assign(n, 0);
        tout.assign(n, 0);
        up.assign(LOG, vector<int>(n, 0));
        timer = 0;
    }

    // 无向树
    void addEdge(int u, int v) {
        g[u].push_back(v);
        g[v].push_back(u);
    }

    void dfs(int u, int p) {
        tin[u] = ++timer;
        up[0][u] = (p == -1 ? u : p);
        for (int k = 1; k < LOG; ++k) {
            up[k][u] = up[k-1][ up[k-1][u] ];
        }
        for (int v : g[u]) if (v != p) {
            depth[v] = depth[u] + 1;
            dfs(v, u);
        }
        tout[u] = ++timer;
    }

    // 预处理 LCA
    void build(int root = 0) {
        depth[root] = 0;
        dfs(root, -1);
    }

    // 查询 u 是否为 v 的祖先
    inline bool is_ancestor(int u, int v) const {
        return tin[u] <= tin[v] && tout[v] <= tout[u];
    }

    int lca(int a, int b) const {
        if (is_ancestor(a, b)) return a;
        if (is_ancestor(b, a)) return b;
        int u = a;
        for (int k = LOG - 1; k >= 0; --k) {
            int nu = up[k][u];
            if (!is_ancestor(nu, b)) u = nu;
        }
        return up[0][u];
    }

    // 第 k 级祖先（k=0 返回自身；越界停在根）
    int kth_ancestor(int v, int k) const {
        for (int i = 0; i < LOG; ++i)
            if (k & (1 << i)) v = up[i][v];
        return v;
    }

    // 边数距离
    int dist(int a, int b) const {
        int c = lca(a, b);
        return depth[a] + depth[b] - 2 * depth[c];
    }
private:
    int n, LOG;
    vector<vector<int>> g;
    vector<int> depth;
    vector<int> tin, tout;
    vector<vector<int>> up;
    int timer = 0;
};

```

### 例题

[【模板】最近公共祖先（LCA） - 洛谷](https://www.luogu.com.cn/problem/P3379)

```c++
#include <bits/stdc++.h>
using namespace std;
using i64 = long long;
using pii = pair<int,int>;
using pll = pair<i64,i64>;

// ----------------------------------------------------------------------------------------------
class LCA {
public:
    LCA(int n = 0) { init(n); }

    void init(int n_) {
        n = n_;
        LOG = (n <= 1 ? 1 : 32 - __builtin_clz(n));
        g.assign(n, {});
        depth.assign(n, 0);
        tin.assign(n, 0);
        tout.assign(n, 0);
        up.assign(LOG, vector<int>(n, 0));
        timer = 0;
    }

    // 无向树
    void addEdge(int u, int v) {
        g[u].push_back(v);
        g[v].push_back(u);
    }

    void dfs(int u, int p) {
        tin[u] = ++timer;
        up[0][u] = (p == -1 ? u : p);
        for (int k = 1; k < LOG; ++k) {
            up[k][u] = up[k-1][ up[k-1][u] ];
        }
        for (int v : g[u]) if (v != p) {
            depth[v] = depth[u] + 1;
            dfs(v, u);
        }
        tout[u] = ++timer;
    }

    // 预处理 LCA
    void build(int root = 0) {
        depth[root] = 0;
        dfs(root, -1);
    }

    // 查询 u 是否为 v 的祖先
    inline bool is_ancestor(int u, int v) const {
        return tin[u] <= tin[v] && tout[v] <= tout[u];
    }

    int lca(int a, int b) const {
        if (is_ancestor(a, b)) return a;
        if (is_ancestor(b, a)) return b;
        int u = a;
        for (int k = LOG - 1; k >= 0; --k) {
            int nu = up[k][u];
            if (!is_ancestor(nu, b)) u = nu;
        }
        return up[0][u];
    }

    // 第 k 级祖先（k=0 返回自身；越界停在根）
    int kth_ancestor(int v, int k) const {
        for (int i = 0; i < LOG; ++i)
            if (k & (1 << i)) v = up[i][v];
        return v;
    }

    // 边数距离
    int dist(int a, int b) const {
        int c = lca(a, b);
        return depth[a] + depth[b] - 2 * depth[c];
    }
private:
    int n, LOG;
    vector<vector<int>> g;
    vector<int> depth;
    vector<int> tin, tout;
    vector<vector<int>> up;
    int timer = 0;
};
// ----------------------------------------------------------------------------------------------
void solve()
{
    int n, m, s;
    cin >> n >> m >> s;
    LCA lca(n);
    for(int i = 0; i < n - 1; ++i) {
        int u, v;
        cin >> u >> v;
        u--, v--;
        lca.addEdge(u, v);
    }
    lca.build(s - 1);
    while(m--) {
        int u, v;
        cin >> u >> v;
        u--, v--;
        cout << lca.lca(u, v) + 1 << "\n";
    }
}

int main()
{

    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int T = 1;
    //cin >> T;
    while(T--) {
        solve();
    }

    return 0;
}

```



## pbds平衡树

### 模板

```C++
#include<bits/stdc++.h>
#include<ext/pb_ds/assoc_container.hpp>
using namespace std;
using namespace __gnu_pbds;
using i64 = long long;
using pll = pair<i64,i64>;
using ordered_set = tree<pll,null_type,less<pll>,rb_tree_tag,tree_order_statistics_node_update>;

void solve()
{
    ordered_set ost;
    //ost.find_by_order(k); 返回下标为k的对象的指针
    //ost.order_of_key(val); 返回小于等于val的数的个数， val可以不存在
    //ost.lower_bound();
    //ost.upper_bound();
    //ost.insert(val);
    //ost.erase(val);
    //ost.erase(ost.lower_bound(val))
}
```

## 滚动哈希

### 模板

``` c++
#include <bits/stdc++.h>
using namespace std;

struct RH64 {
    using ull = unsigned long long;
    static constexpr ull FIXED_RANDOM = 0x9e3779b97f4a7c15ULL;

    ull B;                   // base
    vector<ull> p;           // B^i
    vector<ull> h;           // 前缀哈希：h[i] = s[0..i-1] 的哈希，h[0]=0

    RH64(const string& s, ull base = 1315423911ULL /* 随机奇数更好 */) {
        // 基数最好随机化（运行时随机也可），避免对抗。
        B = base ^ (chrono::steady_clock::now().time_since_epoch().count() + FIXED_RANDOM);
        int n = (int)s.size();
        p.resize(n + 1); h.resize(n + 1);
        p[0] = 1; h[0] = 0;
        for (int i = 0; i < n; ++i) {
            p[i + 1] = p[i] * B;
            h[i + 1] = h[i] * B + (unsigned char)s[i] + 1; // +1 避免前导零
        }
    }

    // 取得子串 s[l..r] 的哈希（闭区间，0-indexed）
    ull get(int l, int r) const {
        // 返回：h[r+1] - h[l] * B^(r-l+1)
        return h[r + 1] - h[l] * p[r - l + 1];
    }
};
```




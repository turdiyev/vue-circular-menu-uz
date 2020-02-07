<template>
    <nav class="circular-menu" ref="menuWrapper" :style="circleSizeStyle">
        <div class="circle">
            <a href class="fa fa-home "></a>
            <a href class="fa fa-facebook "></a>
            <a href class="fa fa-twitter "></a>
            <a href class="fa fa-linkedin "></a>
        </div>

        <a href="#" ref="menuButton" class="menu-button fa fa-bars fa-2x"
        :style="mainButtonStyle"
        ></a>
    </nav>
</template>

<script>
    export default {
        props: {
            radius: {
                type: Number,
                default: 140
            },
            innerRadius: {
                type: Number,
                default: 100
            },
            isHalfCircle: {
                type: Boolean,
                default: true
            },

        },
        data: () => {
            return {}
        },

        mounted() {
            const {radius, innerRadius, isHalfCircle} = this;

            const items = document.querySelectorAll(".circle a");
            const halfSizePercentage = 50;
            const smallRadiusPersentage = (innerRadius * 100) / radius / 2
            console.log(halfSizePercentage, smallRadiusPersentage, this)
            if (isHalfCircle) {
                for (var i = 0, len = items.length; i < len; i++) {
                    items[i].style.left =
                        (
                            halfSizePercentage -
                            smallRadiusPersentage * Math.cos(-Math.PI * (1 + 2 * i) / 8)
                        ).toFixed(4) + "%";

                    items[i].style.top =
                        (
                            halfSizePercentage +
                            smallRadiusPersentage * Math.sin(-Math.PI * (1 + 2 * i) / 8)
                        ).toFixed(4) + "%";
                }
            } else {
                for (var i = 0, l = items.length; i < l; i++) {
                    items[i].style.left =
                        (
                            halfSizePercentage -
                            smallRadiusPersentage * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)
                        ).toFixed(4) + "%";

                    items[i].style.top =
                        (
                            halfSizePercentage +
                            smallRadiusPersentage * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)
                        ).toFixed(4) + "%";
                }

            }

            document.querySelector(".menu-button").onclick = function (e) {
                e.preventDefault();
                document.querySelector(".circle").classList.toggle("open");
            };
        },
        computed: {
            circleSize() {
                return 2 * this.radius
            },
            circleSizeStyle() {
                return {
                    width: this.circleSize + 'px',
                    height: this.circleSize + 'px'
                }
            },
            mainButtonStyle() {
                return {
                    width: this.circleSize/3 + 'px',
                    height: this.circleSize/3 + 'px'
                }
            }
        }
    };
</script>

<style>
    @import "https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css";
    body{
        background: #000;
    }
    .circular-menu {
        margin: 0 auto;
        position: fixed;
        bottom:0;
        left:50%;
        transform: translate(0, 50%);
    }

    .circle {
        width: 100%;
        height: 100%;
        display: flex;
        background: rgba(255,255,255, 0.5);

        opacity: 0;
        border: 1px solid;
        border-radius: 50%;
        -webkit-transform: scale(0);
        -moz-transform: scale(0);
        transform: scale(0);
        -webkit-transition: all 0.4s ease-out;
        -moz-transition: all 0.4s ease-out;
        transition: all 0.4s ease-out;
    }

    .open.circle {
        opacity: 1;
        -webkit-transform: scale(1);
        -moz-transform: scale(1);
        transform: scale(1);
    }

    .circle a {
        text-decoration: none;
        /* color: white; */
        display: block;
        height: 40px;
        width: 40px;
        line-height: 40px;
        margin-left: -20px;
        margin-top: -20px;
        position: absolute;
        text-align: center;
    }

    .circle a:hover {
        color: #eef;
    }

    .menu-button {
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
        text-decoration: none;
        text-align: center;
        color: #444;
        border-radius: 50%;
        -webkit-box-shadow:  1px 1px 1px rgba(0,0,0,0.5);
        -moz-box-shadow:  1px 1px 1px rgba(0,0,0,0.5);
        box-shadow:  1px 1px 1px rgba(0,0,0,0.5);
        display: block;
        height: 60px;
        width: 60px;
        line-height: 40px;
        padding: 10px;
        background: #dde;
    }

    .menu-button:hover {
        background-color: #eef;
    }
</style>